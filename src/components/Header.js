import { LOGO_URL } from "../utils/constants";
import {useState,useEffect} from "react"
import { Link } from "react-router-dom";

const Header = () =>{
    const [login,setLogin]=useState('Login')
    // useEffect(()=>{
    //     console.log("UseEffect in header rendered");
        
    // },[])

    console.log("Header Rendered");
    
    const toggler =()=>{
        // login === 'Login' ? setLogin('Logout') : setLogin('Login')
        setLogin((prev)=> prev==='Login' ? 'Logout': 'Login')
        // console.log(login);
        
    }
    return (
        <div className = "header">
            <div className="logo-container">

                <img 
                    className="logo"
                    src={LOGO_URL} alt="food logo" 
                />
            </div>
            <div className="nav-items">

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={toggler}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;