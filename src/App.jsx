import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import large1 from "./assets/image-product-1.jpg";
import large2 from "./assets/image-product-2.jpg";
import large3 from "./assets/image-product-3.jpg";
import large4 from "./assets/image-product-4.jpg";
import thumbnail1 from "./assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "./assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "./assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "./assets/image-product-4-thumbnail.jpg";
const initialItem = {
  name: "Fall Limited Edition Sneakers",
  company: "Sneaker Company",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250.0,
  discount: 50,
  images: {
    large: [large1, large2, large3, large4],
    thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
  },
};
function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    console.log(item);
    console.log(items);
    console.log(items.findIndex((element) => item.name == element.name));
    const index = items.findIndex((element) => item.name == element.name);
    if (index == -1) setItems((items) => [...items, item]);
    else {
      let updatedItem = items[index];
      updatedItem.counter += item.counter;
      updatedItem.total = updatedItem.counter * updatedItem.price;
      let newItemsArray = [...items];
      newItemsArray[index] = updatedItem;
      setItems(newItemsArray);
    }
  }
  function deleteItem(index) {
    setItems((items) => items.filter((item, i) => index != i));
  }
  return (
    <div className="container w-[90%] m-auto h-fit  ">
      <Header items={items} deleteItem={deleteItem} />
      <Main addItem={addItem} item={initialItem} />
    </div>
  );
}

export default App;
