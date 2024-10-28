import Gallery from "./Gallery";
import Slider from './Slider';
import large1 from '../assets/image-product-1.jpg';
import large2 from '../assets/image-product-2.jpg';
import large3 from '../assets/image-product-3.jpg';
import large4 from '../assets/image-product-4.jpg';
import Counter from "./Counter";
import cartIcon from '../assets/icon-cart.svg';

const large = [
    large1,
    large2,
    large3,
    large4
]
function Main(){
    return(
        <main className="container lg:w-11/12 m-auto py-20 flex flex-wrap items-center justify-between gap-5">
            <div className="w-full lg:w-1/2">
                <div className="block md:hidden">
                    <Slider images={large}/>
                </div>
                <div className="hidden md:block">
                    <Gallery large={large}/>
                </div>
            </div>
            <div className="w-full lg:w-[45%] px-10">
                <b className=" uppercase text-[#68707d] text-sm tracking-widest">Sneaker Company</b>
                <h1 className="text-3xl md:text-5xl font-bold mt-3 mb-6">Fall Limited Edition Sneakers</h1>
                <p className="text-[#68707d]">These low-profile sneakers are your perfect casual wear companion. Featuring a 
  durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <p className="flex gap-3 items-end mt-6 mb-3"><h2 className="text-3xl font-bold">$125.00</h2> <span className="bg-black text-white py-1 px-2 rounded-md">50%</span></p>
                <del className="text-[#68707d] ">$250.00</del>

                <div className="mt-6 flex justify-between flex-col sm:flex-row  gap-5">
                    <Counter />
                    <button className="flex flex-grow gap-3 bg-orange-500 w-full sm:w-2/4 justify-center items-center py-3 rounded-xl text-black font-bold transition-colors hover:bg-orange-300"><img src={cartIcon} /> Add to cart</button>
                </div>
            </div>
        </main>
    )
}

export default Main;