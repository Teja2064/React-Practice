import React, {Component} from 'react'

class ButtonsComponent extends Component{

    constructor(props){
        super(props)
        this.state={
            selectedBtn: null,
            counter: 0
        }
        this.myClick=this.myClick.bind(this)
        console.log("I am a constructor")
    }
   
    myClick=(type)=>{
    
    this.setState({
        counter:this.state.counter+1,
        selectedBtn: type
    })
    
    
     if(type==='employe'){
     console.log("Add employee button cilcked ")
     }
     else{
       console.log('add Employer button is clicked')
     }
    }
    static getDerivedStateFromProps(props,state){
        console.log(props,state)
        return null

    }
    shouldComponentUpdate(){
        console.log("i am shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("i am get snanp shot before update")
        return null
    }
    componentDidMount(){
        console.log("component mounted")

    }
    componentDidUpdate(){
        console.log("component updated")}
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        console.log("i am in render")

     return(
 
        <div>
            <h4>{this.props.msg}</h4>
        
        <button onClick={()=>{this.myClick("employe")}}> Add Employe</button>
        <button onClick={()=>{this.myClick("employer")}}> Add Employer</button>
        {this.state.selectedBtn === "employe" && 
        <h3>Add empoloye button is clicked</h3>}
        {this.state.selectedBtn==="employer" && <h3>Add empoloyer button is clicked</h3>}
        <div>The myClick method called{this.state.counter} times</div>
  
      </div>
      )
    }


}

export default ButtonsComponent