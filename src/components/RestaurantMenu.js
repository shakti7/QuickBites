import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu =()=>{

    const {resId}  = useParams()
    // console.log(params);
    

    const resInfo =  useRestaurantMenu(resId)

    if(resInfo === null ){
        return <Shimmer /> 
    }

    // This can be one of the possible solution to resolve our issue
    // const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info || {}
    const {name, costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info 

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card 
    console.log("Items Card:" , resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((card) => {
        return (card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    });
    

    // console.log("categories: ",categories);
    

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}- {costForTwoMessage}</p>

            {categories.map((category)=><RestaurantCategory data={category?.card?.card}/>)  }   
        </div>
    )
}

export default RestaurantMenu;