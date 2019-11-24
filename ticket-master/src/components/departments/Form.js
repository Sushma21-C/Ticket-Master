import React from 'react'

class DepartmentForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name:this.state.name
        }
        console.log(formData)
        this.props.handleSubmit(formData)
        this.setState({
            name : ''
        })
    }

    render(){
        return (
             <div>
                 <form onSubmit={this.handleSubmit}>
                     <label> Name 
                     <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                     </label>
                     <input type="submit"/>
                 </form>
             </div>
        )
    }
}
export default DepartmentForm