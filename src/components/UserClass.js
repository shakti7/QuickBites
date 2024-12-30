import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        // console.log(props);
        
        this.state={
            count: 0,
            count2:2
        }
    }

    incCount = () =>{
        this.setState(prev => ({
            count:prev.count+1
        }))
    }

    render(){
        const {name, location}= this.props
        return(
        <div className="user-card">
            <h2>Count: {this.state.count}</h2>
            <button onClick={this.incCount}>Button</button>
            <h2>Count2: {this.state.count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @shakti7</h4>
        </div>
        )
    }
}

export default UserClass;