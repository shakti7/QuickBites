import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; 
import useRestaurantMenu from "../utils/useRestaurantMenu";


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