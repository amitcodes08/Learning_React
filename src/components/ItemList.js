import { useDispatch } from "react-redux";
import { addItems } from "../utilis/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item.name));
  };

  return (
    <div className="flex flex-wrap justify-center">
        {items.map((item) => (
          <div key={item.id} resData={item} className="m-4 p-4 border border-gray-300 rounded-lg w-60">
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-sm text-gray-600">₹{item.price / 100}</p>
            <button 
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => handleAddItem(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  );
};

export default ItemList;
