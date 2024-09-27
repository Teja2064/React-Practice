import React, {Component} from 'react'

    export default class Tapp extends Component{
        state={
            character:{}
        } 

        componentDidMount(){
            console.log(componentDidMount)
            fetch("http://api.weatherapi.com/v1/")
                .then(res => res.json())
                .then(data => {
                    this.setState({character: data})})

        }
        render(){
            console.log("render")
            return(
                <h1>{this.state.character.name}</h1>
            )

        }
    }