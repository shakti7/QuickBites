import { useDispatch } from "react-redux";
import {CDN_URL} from "../utils/constants"
import { addItem } from "../utils/cartSlice";

const ItemList =({items})=>{
    console.log("Item cards: ",items);
    const dispatch = useDispatch()
    // console.log("Dispatch: ",dispatch);
    
    const handleAddItem=(item)=>{
        dispatch(addItem(item))
    }
    
    return (
        <div>
            {
                items.map((item)=> (
                    <div key={item.card.info.id} className="p-2 m-2   border-gray-300 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">

                            <div className="py-2">
                                {/* {console.log(parseInt(item?.card?.info?.price) /100) */}
                                
                                <span className="text-lg font-semibold">{item?.card?.info?.name}</span>
                                <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice /100}</span>
                            
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4">

                            <div className="absolute">

                                <button className="p-2 bg-black text-white shadow-lg rounded-lg" onClick={()=>handleAddItem(item)}>Add +</button>

                            </div>
                                <img src={CDN_URL+item?.card?.info?.imageId} className="w-40 rounded-lg"/>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList