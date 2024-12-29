import React from "react"
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";



const AppLayOut = ()=> {
    // console.log(<Body />); // Body and Headers are nothing but React Element => object
    
    return(
      <div className="app">
          <Header />
          <Body />
      </div>
    )
}


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<AppLayOut/>)



