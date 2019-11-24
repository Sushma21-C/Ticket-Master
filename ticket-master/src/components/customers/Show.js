import React from 'react'
import axios from '../../config/axios';
import {Link} from 'react-router-dom'


class CustomerShow extends React.Component{
    constructor(){
        super()
        this.state={
            customer: {}
        }
    }

    handleRemove =()=>{
        const id = this.props.match.params.id
        const confirmRemove = window.confirm("Are you sure?")
        if(confirmRemove){
            axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then(response => {
                console.log(response.data)
            this.props.history.push('/customers')
            })
        }
        
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then(response => {
            const customer = response.data
            console.log(customer)
            this.setState({customer})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        //console.log(this.props.match.params.id)
        const id = this.props.match.params.id
        return(
            <div>
                <h3>Customer Show Page</h3>
                <p>{this.state.customer.name},
                {this.state.customer.email},
                {this.state.customer.mobile}</p>
                
                <Link to={`/customers/edit/${id}`}>Edit</Link> |
                <button onClick={this.handleRemove}>Delete </button>
                <Link to="/customer">back</Link>
                
            </div>
        )
    }
}

export default CustomerShow