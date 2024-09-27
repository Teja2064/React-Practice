import React,{Component} from 'react'

class FormsWithClass extends Component{
    constructor(props){
        super(props)
        this.state={
            fname:'',
            lname:'',
            email:'',
            phone:''
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log("input value chcanges")
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log('submit button is clicked')
        console.log(this.state)
        this.clearForm()
    }
    clearForm=()=>{
        this.state={
            fname:'',
            lname:'',
            email:'',
            phone:''
        }
    }
    render(){
        return(
            <div>
            <h1>Forms with class</h1>
            
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                
                <label htmlFor="fname"> First Name</label>
                <input name='fname'type='text' value={this.state.fname}
                onChange={(e)=>this.handleChange(e)}
                />
                <br/><br/>
                <label htmlFor="lname"> Last Name</label>
                <input name='lname'type='text' value={this.state.lname}
                onChange={(e)=>this.handleChange(e)}
                />
                <br/><br/>
                <label htmlFor="email">  EMAIL   </label>
                <input name='email'type='text' value={this.state.email}
                onChange={(e)=>this.handleChange(e)}
                />
                <br/><br/>
                <label htmlFor="phone"> Contact No.</label>
                <input name='phone'type='tel' value={this.state.phone}
                onChange={(e)=>this.handleChange(e)}
                />
                <br/><br/>
                <button type='submit'>Submit Form</button>




            </form>
            </div>
        )
    }
}
export default FormsWithClass