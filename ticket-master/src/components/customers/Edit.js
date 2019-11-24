import React from 'react';
import axios from '../../config/axios';
import CustomerForm from './Form'

class CustomerEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            customer:{}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            const customer = response.data
            this.setState({customer})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleSubmit(formData){
        const id = this.props.match.params.id
        axios.put(`/customers/${id}`,formData, {
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then(response =>{
                if(response.data.hasOwnProperty('error')){
                    alert(response.data.message)
                }else{
                    this.props.history.push(`/customers/${response.data._id}`)
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }        
    render(){
        return(
            <div>
                <h2>Customer Edit</h2> 
                {(Object.keys(this.state.customer).length !== 0) && <CustomerForm customer={this.state.customer} 
                handleSubmit={this.handleSubmit}/>}
            </div>
        )
    }
}
export default CustomerEdit