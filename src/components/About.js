import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is about us</h2>
            <User name={"Shaktu"}/>
            <UserClass name={"Shakti Class"} location={"Cuttack Class"}/>
        </div>
    )
}

export default About;