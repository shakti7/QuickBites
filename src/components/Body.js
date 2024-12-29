import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";

const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]) 
    // console.log(listOfRestaurants);
    useEffect(()=>{
        fetchData()
        
    },[])

    const fetchData =async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


        const jsonData= await data.json()

        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        // console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
    }
    
    console.log("Body Rendered");

    if(listOfRestaurants.length === 0){
        return <Shimmer />
    }
    

    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn"
                onClick={
                    ()=> {
                        const filteredRest= listOfRestaurants.filter((rest)=>rest?.info?.avgRating > 4)
                        setListOfRestaurants(filteredRest)

                        // console.log(listOfRestaurants);
                        
                }}
                
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
            {
                // console.log("listOfRestaurants: ",listOfRestaurants)
                
                listOfRestaurants.map((restaurant)=> <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
            }
        </div>
    </div>
    )
}

export default Body;