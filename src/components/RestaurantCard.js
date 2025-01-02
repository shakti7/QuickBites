import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) =>{
    // console.log(props);

    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resData?.info
    
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200">
        <img
            className="res-logo w-full object-cover rounded-lg"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="text-lg font-bold mt-2">{name}</h3>
        <h4 className="text-sm text-gray-600 break-words">
            {cuisines.join(", ")}
        </h4>
        <h4 className="text-sm text-yellow-500">{avgRating} stars</h4>
        <h4 className="text-sm text-gray-700">{costForTwo}</h4>
        <h4 className="text-sm text-gray-500">{sla.slaString}</h4>
        </div>

    )
}


export default RestaurantCard;