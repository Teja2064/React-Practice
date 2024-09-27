import React, {Component} from 'react'

export default class Javas extends Component{


    componentDidMount(){
        console.log("Mount")

    }
    componentDidUpdate(){
        console.log("Update")
    }
    render(){
        console.log("render")
        return(
            <h1>Hello</h1>
        )
    }
}