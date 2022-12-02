import {Component} from 'react'

class Events extends Component{
	state={
		username:"",
		number:""
	}
	handleClick=()=>{
		console.log(this.state.username)
		console.log(this.state.number)
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	render(){
		return(
		<div>
			<input
			 name="username"
			 onChange={this.handleChange}
			 placeholder="Enter username"/><br/>
			 <input
			  name="number"
			  onChange={this.handleChange}
			  placeholder="Enter number"/>
			 <button onClick={this.handleClick}>Submit</button>
			</div>
		)
	}
}
export default Events