import React,{lazy, Suspense} from "react"
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=> import('./components/Grocery'))
const About =lazy(()=> import('./components/About'))

const AppLayOut = ()=> {
    // console.log(<Body />); // Body and Headers are nothing but React Element => object
    console.log("App rendered");
    
    return(
      <div className="app">
          <Header />
          <Outlet />
      </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayOut/>, 
    children:[
    {
      path:"/",
      element:<Body />
    },
    {
      path:"/about",
      element:<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>
    },
    {
      path:"/contact",
      element:<Contact />
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu />
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
    }],
    errorElement:<Error />
  },
  
])


const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={appRouter} />)



