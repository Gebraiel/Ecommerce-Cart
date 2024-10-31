import Gallery from "./Gallery";
import Slider from "./Slider";
import cartIcon from "../assets/icon-cart.svg";
import { useState } from "react";
import Lightbox from "./Lightbox";

function Main({ addItem, item }) {
  const [lightBoxImage, setLightBoxImage] = useState(-1);
  const {
    name,
    company,
    description,
    price,
    discount,
    images: { large, thumbnails },
  } = item;
  const [counter, setCounter] = useState(1);
  function increaseCounter() {
    setCounter((counter) => counter + 1);
  }
  function decreaseCounter() {
    counter > 1 && setCounter((counter) => counter - 1);
  }
  function handleImageClick(index) {
    setLightBoxImage(index);
  }
  function hideLightBox() {
    setLightBoxImage(-1);
  }
  function handleAddItem() {
    const priceAfterDiscount = (discount * price) / 100;

    const item = {
      name,
      price: priceAfterDiscount > 0 ? priceAfterDiscount : price,
      counter,
      image: thumbnails[0],
    };
    addItem(item);
  }
  return (
    <main className="container lg:w-11/12 m-auto py-20 flex flex-wrap items-center justify-between gap-5">
      <div className="w-full lg:w-1/2">
        <div className="block md:hidden">
          <Slider images={large} />
        </div>
        <div className="hidden md:block max-w-[500px] m-auto">
          <Gallery
            handleClick={handleImageClick}
            large={large}
            activeImage={0}
            thumbnails={thumbnails}
          />
        </div>
      </div>
      <div className="w-full lg:w-[45%] px-10">
        <b className=" uppercase text-[#68707d] text-sm tracking-widest">
          {company}
        </b>
        <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-6">{name}</h1>
        <p className="text-[#68707d]">{description}</p>
        {discount != 0 ? (
          <>
            <p className="flex gap-3 items-end mt-6 mb-3">
              <h2 className="text-3xl font-bold">
                ${(price * discount) / 100}
              </h2>{" "}
              <span className="bg-black text-white py-1 px-2 rounded-md">
                {discount}%
              </span>
            </p>
            <del className="text-[#68707d] ">${price}</del>
          </>
        ) : (
          <h2>{price}</h2>
        )}
        <div className="mt-6 flex justify-between flex-col sm:flex-row  gap-5">
          <div className="flex w-full sm:w-1/4 bg-[#f7f8fd] justify-between items-center p-4 rounded-lg flex-grow text-orange-500  font-bold">
            <button
              className="text-3xl transition-colors hover:text-orange-300"
              onClick={decreaseCounter}
            >
              -
            </button>
            <p className="text-black">{counter}</p>
            <button
              className="text-3xl transition-colors hover:text-orange-300"
              onClick={increaseCounter}
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddItem}
            className="flex flex-grow gap-3 bg-orange-500 w-full sm:w-2/4 justify-center items-center py-3 rounded-xl text-black font-bold transition-colors hover:bg-orange-300"
          >
            <img src={cartIcon} /> Add to cart
          </button>
        </div>
      </div>
      {lightBoxImage != -1 && (
        <Lightbox
          hideLightBox={hideLightBox}
          imageIndex={lightBoxImage}
          large={large}
          thumbnails={thumbnails}
        />
      )}
    </main>
  );
}

export default Main;
