import {CDN_URL} from "../utils/constants"

const ItemList =({items})=>{
    console.log("Item cards: ",items);
    
    return (
        <div>
            {
                items.map((item)=> (
                    <div key={item.card.info.id} className="p-2 m-2   border-gray-300 border-b-2 text-left">
                        <div className="flex justify-between">

                            <div className="py-2">
                                {/* {console.log(parseInt(item?.card?.info?.price) /100) */}
                                
                                <span className="text-lg font-semibold">{item?.card?.info?.name}</span>
                                <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price /100 : item?.card?.info?.defaultPrice /100}</span>
                            
                            </div>
                            <img src={CDN_URL+item?.card?.info?.imageId} className="w-32"/>
                        </div>
                        <p className="text-sm">{item.card.info.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList