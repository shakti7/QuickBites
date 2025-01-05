import {createSlice, current} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            console.log("action: ",action);
            console.log(current(state));
            
            
            
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            console.log(current(state));
            
            // state.items=[]
            state.items.length =0 
            console.log(state);
            
        }
    }
})

export const {addItem,removeItem,clearCart}= cartSlice.actions
export default cartSlice.reducer