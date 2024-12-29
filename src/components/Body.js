import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState} from 'react';

const Body =()=>{

    const [listOfRestaurants, setListOfRestaurants] = useState(resList) 
    // console.log(listOfRestaur s);
    
    

    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn"
                onClick={
                    ()=> {
                        const filteredRest= listOfRestaurants.filter((rest)=>rest.data.avgRating > 4)
                        setListOfRestaurants(filteredRest)

                        console.log(listOfRestaurants);
                        
                }}
                
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
            {
                // console.log("listOfRestaurants: ",listOfRestaurants)
                
                listOfRestaurants.map((restaurant)=> <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
            }
        </div>
    </div>
    )
}

export default Body;