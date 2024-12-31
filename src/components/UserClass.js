import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)
        // console.log(props);
        
        // console.log(this.props.name," Constructor");
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
                // avatar_url:"https://foundations.projectpythia.org/_images/GitHub-logo.png"
            }
        }
        
    }

    incCount = () =>{
        this.setState(prev => ({
            count:prev.count+1
        }))
    }

    async componentDidMount(){
        // console.log(this.props.name," component did mount called");
        const data = await fetch("https://api.github.com/users/shakti7")
        const jsonData = await data.json()
        console.log(jsonData);
        
        this.setState({
            userInfo:jsonData
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update called");
        
    }

    componentWillUnmount(){
        console.log("Called just before unmount");
        
    }


    render(){
        console.log(this.props.name,"Component Render");
        
        // const {name, location}= this.props
        const {name,location,avatar_url}= this.state.userInfo
        // debugger;
        return(
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @shakti7</h4>
        </div>
        )
    }
}

export default UserClass;