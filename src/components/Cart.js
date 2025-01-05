import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems= useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()
    console.log(cartItems);
    const handleClearCart=()=>{
        dispatch(clearCart())
    }
    
    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">
                Cart
            </h1>
            <div className="w-6/12 m-auto">
                <button className="bg-black text-white m-2 p-2 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty!! Add items to your cart 🛒</h1>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;