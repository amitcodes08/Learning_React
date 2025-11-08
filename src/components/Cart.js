import { useSelector } from "react-redux";
import { clearItems } from "../utilis/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="text-center m-10 p-10">
            <h1 className="text-3xl font-bold m-4">Cart Items</h1>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
                onClick={() => dispatch(clearItems())}
            >
                Clear Cart
            </button>
            <p className="m-4">This is the Cart Page.</p>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - ₹{item.price / 100}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default Cart;