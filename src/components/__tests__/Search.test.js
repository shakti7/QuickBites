import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import { json } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResListData.json"
import "@testing-library/jest-dom"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search Res List for Pizza text input",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))
    const cardsBeforeSearch = screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(8)

    const seachBtn = screen.getByRole("button",{name: "Search"})
    // console.log(seachBtn);
    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput,{target: {value:"Pizza"}})
    fireEvent.click(seachBtn)
    // expect(searchBtn).toBeInTheDocument()

    const cards= screen.getAllByTestId("resCard")
    expect(cards.length).toBe(2)
})


it("Should filter Top rated restaurant",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))
    const btn = screen.getAllByTestId("resCard")
    expect(btn.length).toBe(8)
    const topRatedBtn = screen.getByRole("button",{name: "Top Rated Restaurant"})
    fireEvent.click(topRatedBtn)
    const cardsAfterFilter = screen.getAllByTestId("resCard")
    expect(cardsAfterFilter.length).toBe(3)
})