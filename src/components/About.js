import User from "./User";
import UserClass from "./UserClass";
import React from "react"

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor");
        
    }

    componentDidMount(){
        console.log("Parent component did mount called");
        
    }

    render(){
        console.log("Parent Render");
        
        return (
            <div>
                <h1>About</h1>
                <h2>This is about us</h2>
                <User name={"Shaktu"}/>
                <UserClass name={"Shakti Class"} location={"Cuttack Class"}/>
                {/* {console.log("Parent Render-2")} */}
            </div>
        )
    }
}

// const About = ()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about us</h2>
//             <User name={"Shaktu"}/>
//             <UserClass name={"Shakti Class"} location={"Cuttack Class"}/>
//         </div>
//     )
// }

export default About;