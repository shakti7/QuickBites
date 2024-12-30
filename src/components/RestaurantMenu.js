import {useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import { MENU_API } from "../utils/constants";

const RestaurantMenu =()=>{
    const[resInfo,setResInfo]= useState(null)

    const {resId}  = useParams()
    // console.log(params);
    

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu =async()=>{
        const data = await fetch(MENU_API+resId)

        const jsonData =await data.json()
        // console.log("Json Data: ",jsonData);
        setResInfo(jsonData.data)
        
    }
    if(resInfo === null ){
        return <Shimmer /> 
    }

    // This can be one of the possible solution to resolve our issue
    // const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info || {}
    const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info 

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
    // console.log("Items Card:" , itemCards);
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}- {costForTwoMessage}</p>
            
            <h2>Menu</h2>
            <ul>
                {
                    itemCards?.map((card)=> {
                        // console.log("card: ",card);
                        
                    return(
                        <li key={card.card.info.id}>
                            {card?.card?.info?.name} - ₹{card?.card?.info?.price / 100 || card?.card?.info?.defaultPrice/100}
                        </li>
                    )
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;