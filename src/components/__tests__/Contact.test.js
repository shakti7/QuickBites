import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

test("Should load the contact us component",()=>{
    render(<Contact/>)

    const heading=screen.getByRole("heading")
    
    expect(heading).toBeInTheDocument()
})
test("Should load button inside contact us component",()=>{
    render(<Contact/>)

    // const button=screen.getByRole("button")
    const button=screen.getByText("Submit")
    
    expect(button).toBeInTheDocument()
})
test("Should load input name inside contact us component",()=>{
    render(<Contact/>)

    // const button=screen.getByRole("button")
    const inputName=screen.getByPlaceholderText("name")
    
    expect(inputName).toBeInTheDocument()
})
test("Should load 2 input boxes inside contact us component",()=>{
    render(<Contact/>)

    //Querying
    const inputBoxes=screen.getAllByRole("textbox")
    // console.log("input Box: ",inputBoxes[0]); //return jsx element/React FiberNode/virtual DOM
    
    
    expect(inputBoxes.length).toBe(2)
})