import { LOGO_URL } from "../utils/constants";
import {useState,useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [login,setLogin]=useState('Login')
    // useEffect(()=>{
    //     console.log("UseEffect in header rendered");
        
    // },[])

    console.log("Header Rendered");
    const {loggedInUser} = useContext(UserContext)

    const cartItems = useSelector((store)=> store.cart.items)
    console.log(cartItems);
    
    
    
    const toggler =()=>{
        // login === 'Login' ? setLogin('Logout') : setLogin('Login')
        setLogin((prev)=> prev==='Login' ? 'Logout': 'Login')
        // console.log(login);
        
    }
    return (
        <div className = "flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">

                <img 
                    className="w-56"
                    src={LOGO_URL} alt="food logo" 
                />
            </div>
            <div className="flex items-center">

                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{(useOnlineStatus()==true) ? "🟢":"🔴"}</li>
                    <li className="px-4"><Link to="/" style={{textDecoration:'none', color:'inherit'}}>Home</Link></li>
                    <li className="px-4"><Link to="/about" style={{textDecoration:'none',color:'inherit'}}>About Us</Link></li>
                    <li className="px-4"><Link to="/contact" style={{textDecoration:'none', color:'inherit'}}>Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery" style={{textDecoration:'none', color:'inherit'}}>Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart - ({cartItems.length } items)</Link></li>
                    <button className="login" onClick={toggler}>{login}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;