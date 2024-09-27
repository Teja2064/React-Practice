import React, {Component} from 'react'


export default class Japp extends Component{
  constructor(props){
    super(props)
    this.state={
      show:true,
      count:0,

    }
  }
  deleteHeader=()=>{
    this.setState({show:false})

  }
  componentDidMount(){
    console.log("componentDid Mount")

  }
  componentDidUpdate(){
    console.log('component did updated')
  }

  render(){
    let Header;
    if(this.state.show){
      Header=<Child />
    }
    return(
      <div>
        <center>
          {Header}
          <button type='button' onClick={this.deleteHeader}>Delete Header</button>
          <h2>count:{this.state.count}</h2>
          <button type='button' onClick={()=> this.setState({count:this.state.count+1})}>Increment</button>

        </center>
      </div>
    )

  }
}

class Child extends Component{
  componentWillUnmount(){
    console.log("component will unmount")
  }
  render(){
    return(
      <div>
        <h1> Child component</h1>
      </div>
    )
  }
}


