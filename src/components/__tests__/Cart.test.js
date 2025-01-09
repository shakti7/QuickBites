import { BrowserRouter, json } from "react-router-dom"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { act, fireEvent, render,screen } from "@testing-library/react"
import Cart from "../Cart"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header"
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> Promise.resolve(MOCK_DATA)
    })
})

it("Should load restaurant menu component",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        </BrowserRouter>
    ))

    const accordionVegPizza = screen.getByText("Veg Pizza (14)")

    fireEvent.click(accordionVegPizza)
    
    expect(screen.getAllByTestId("foodItems").length).toBe(14)
    
    const addBtns = screen.getAllByRole("button",{name:"Add +"}) 
    fireEvent.click(addBtns[0])

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument()

    expect(screen.getAllByTestId("foodItems").length).toBe(15)
    const clearCart = screen.getByRole("button",{name: "Clear Cart"})
    fireEvent.click(clearCart)
    expect(screen.getAllByTestId("foodItems").length).toBe(14)
})