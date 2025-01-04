import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

import { withPromotedLabel } from "./RestaurantCard";

const RestaurantPromoted = withPromotedLabel(RestaurantCard);

const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]) 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]) 

    const [searchText, setSearchText] = useState("")
    // console.log(listOfRestaurants.length);
    useEffect(()=>{
        fetchData()
        
    },[])

    const fetchData =async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.462521&lng=85.8829895&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


        const jsonData= await data.json()
        console.log("Response: ",jsonData);
        

        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        // console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
    }
    
    console.log("Body Rendered");
    // console.log(listOfRestaurants);
    // console.log(filteredRestaurants);
    
    if(!useOnlineStatus()){
        return <h1>It looks like you are offline. Please check your internet connection</h1>
    }
    

    

    return listOfRestaurants.length === 0 ?( <Shimmer /> ): (
    <div className="body">
        <div className="flex">
            <div className="m-4 p-4">
            <input 
                type="text" 
                className="border border-solid border-black" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                    // console.log(searchText)
                } 
                
            } />
            <button className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                onClick={()=> {
                    // console.log(searchText)
                    const filteredRestaurant = listOfRestaurants.filter((res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                    
                    setFilteredRestaurants(filteredRestaurant)
                }}
            >
                    Search</button>
            </div>

            <div className="m-4 p-4 flex items-center">

                <button className="px-4 py-1 bg-gray-200 rounded-lg"
                    onClick={
                        ()=> {
                            const filteredRest= listOfRestaurants.filter((rest)=>rest?.info?.avgRating > 4)
                            setFilteredRestaurants(filteredRest)

                            // console.log(listOfRestaurants);
                            
                    }}
                    
                >
                    Top Rated Restaurant
                </button>
            </div>
        </div>
        <div className="flex flex-wrap">
            {
                // console.log("listOfRestaurants: ",listOfRestaurants)
                
                filteredRestaurants.map((restaurant)=>{
                    // restaurant.info.avgRating >=4.5 ? console.log("Greater") : console.log("Lesser")
                    
                    
                    return( 
                    <Link to={`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id} style={{textDecoration: 'none',color:'inherit'}}>
                        {
                            restaurant.info.avgRating >=4.4 ? <RestaurantPromoted resData={restaurant} /> : <RestaurantCard  resData={restaurant}/>
                        }
                    </Link>
                )})
            }
        </div>
    </div>
    )
}

export default Body;