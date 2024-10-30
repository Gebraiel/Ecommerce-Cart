import deleteIcon from "../assets/icon-delete.svg";
function ItemsList({ items, deleteItem }) {
  return (
    <>
      <div className="px-3 pt-3">
        {items.length > 0 ? (
          <>
            <h1>Items</h1>
            {items.map((item, index) => (
              <div className="flex gap-3">
                <div className="w-[50px]">
                  <img
                    src={item.image}
                    className="rounded-md"
                    alt="product image"
                  />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p className="flex gap-2">
                    <span>${item.price}</span>
                    <span>x {item.counter}</span>
                    <span>${item.price * item.counter}</span>
                  </p>
                </div>
                <button onClick={() => deleteItem(index)}>
                  <img src={deleteIcon} alt="" />
                </button>
              </div>
            ))}
            <button className=" bg-orange-500 w-full rounded text-black font-semibold mt-5 py-2">
              Checkout
            </button>
          </>
        ) : (
          <h1 className="text-center p-20">Your Cart is empty</h1>
        )}
      </div>
    </>
  );
}
export default ItemsList;
