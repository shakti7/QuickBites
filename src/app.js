import React from "react"
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";

const AppLayOut = ()=> {
    // console.log(<Body />); // Body and Headers are nothing but React Element => object
    
    return(
      <div className="app">
          <Header />
          <Body />
      </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayOut/>
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/contact",
    element:<Contact />
  }
])


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={appRouter} />)



