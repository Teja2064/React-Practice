import React, { Component } from 'react'

class Smessage extends Component{

    constructor(){
        super();
        this.state={
            message: 'welcome visitor'

        };
        this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        });
    }
    render(){
        return(
            <div>
                
            <h1>{this.state.message}</h1>
            <button onClick={this.changeMessage}> Subscribe </button>
            </div>
        );
    }
}

export default Smessage