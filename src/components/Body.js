import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import Shimmer from "./Shimmer";

const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]) 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]) 

    const [searchText, setSearchText] = useState("")
    // console.log(listOfRestaurants);
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
    
    

    

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
        <div className="filter">
            <input 
                type="text" 
                className="search-box" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value)
                    // console.log(searchText)
                } 
                
            } />
            <button 
                onClick={()=> {
                    // console.log(searchText)
                    const filteredRestaurant = listOfRestaurants.filter((res)=> res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                    
                    setFilteredRestaurants(filteredRestaurant)
                }}
            >
                    Search</button>
            <button className="filter-btn"
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
        <div className="res-container">
            {
                // console.log("listOfRestaurants: ",listOfRestaurants)
                
                filteredRestaurants.map((restaurant)=> <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>)
            }
        </div>
    </div>
    )
}

export default Body;