import { useEffect, useState } from "react";
import cartIcon from "../assets/icon-cart.svg";
import ItemsList from "./ItemsList";
export default function Cart({ items, deleteItem }) {
  const [show, setShow] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    let count =
      items.length > 0
        ? items.map((item) => item.counter).reduce((f, s) => f + s, 0)
        : 0;
    setCounter(count);
    console.log(count);
  }, [items]);
  return (
    <div>
      <button onClick={() => setShow(!show)} className="relative">
        <img src={cartIcon} alt="cart-icon" />
        {counter > 0 && (
          <div className="absolute -right-2 -top-2 bg-orange-500 rounded-lg px-2 text-[10px] text-white">
            {counter}
          </div>
        )}
      </button>
      {show && (
        <div className="sm:rounded shadow-lg mt-9 w-full sm:w-80 m-auto absolute left-0 top-full -translate-y-9 sm:right-0 sm:left-auto sm:-bottom-70 py-3 bg-white z-30">
          <h3 className=" ps-3 pb-5 border-b"> Cart</h3>
          <ItemsList items={items} deleteItem={deleteItem} />
        </div>
      )}
    </div>
  );
}
