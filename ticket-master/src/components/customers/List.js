import React from 'react';
import axios from '../../config/axios';
import {Link} from 'react-router-dom';

class CustomersList  extends React.Component{
    constructor(){
        super()
        this.state={
            customers:[]
        }
    }
        handleRemove =(id)=>{
            const confirmRemove=window.confirm("Are you sue?")
            if(confirmRemove){
                axios.delete(`/customers/${id}`,{
                    headers:{
                        'x-auth':localStorage.getItem('authToken')
                    }
                })
                .then(response =>{
                    console.log(response.data)
                    this.setState(prevState=>({
                        customers:prevState.customers.filter(customer=>
                            customer._id != response.data._id)
                    }))
                })
            }
        }
        componentDidMount(){
            axios.get('/customers')
            .then(response=>{
                console.log(response.data)
                const customers=response.data
                this.setState({customers})
            })
            .catch(err=>{
                console.log(err)
            })
        }
        render(){
        return(
            <div>
        
                <h2>Listing customers-{this.state.customers.length}</h2>
                <ul>
                    {this.state.customers.map(customer=>{
                        return <li key={customer._id}><Link to={`/customers/show/${customer._id}`}>{customer.name}</Link>
                        <button onClick={()=>{
                            this.handleRemove(customer._id)
                        }}>Remove</button></li>
                        
                    })}
                </ul>
                <Link to="/customers/new">Add customer</Link>
            </div>
            
        )
    }
}
export default CustomersList