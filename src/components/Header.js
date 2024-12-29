import { LOGO_URL } from "../utils/constants";
import {useState,useEffect} from "react"

const Header = () =>{
    const [login,setLogin]=useState('Login')
    useEffect(()=>{
        console.log("Header rendered");
        
    },[])

    // console.log("Header Rendered");
    
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
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={toggler}>{login}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;