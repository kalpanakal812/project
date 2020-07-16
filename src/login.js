const { Component } = require("react")

class Login extents Component{
    costructor(props){
        super(props);
        this.state={
            username:''
            password:''
        }
        }
        render(){
            return(
         <div>
             <AppBar
title="Login"/>
<TextField>
    hinttext="enter your username"
    floatingLabelText="Username"
    onChange={(event,newValue)=>
    this.setState({Username:newValue})}
    />
    <br/>
    <TextField
type="password"
hintText="Enter your Password"

        }
    }
}