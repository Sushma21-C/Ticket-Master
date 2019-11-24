import React from 'react'
import axios from '../../config/axios';
import DepartmentForm from './Form'

class DepartmentList extends React.Component{
    constructor(){
        super()
        this.state={
            departments:[]
        }
    }
    handleSubmit = (formData) => {
        axios.post(`/departments`,formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            // console.log(response.data)
            if(response.data.hasOwnProperty('erros')){
                alert(response.data.message)
            }else{
                const department = response.data
                this.setState(prevState =>({
                    departments:prevState.departments.concat(department)
                }))
            }
        })
    } 
    componentDidMount(){
        axios.get(`/departments`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            const departments = response.data
            this.setState({departments})
        })
    }
    handleRemove = (id) =>{
        const handleRemove = window.confirm("Are you sure?")
        if(handleRemove){
            axios.delete(`/departments/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then(response =>{
                console.log(response.data)
                this.setState(prevState=>({
                    departments:prevState.departments.filter(department=>
                        department._id !== response.data._id)
                }))
            })
        }
    }
    render(){
        return(
            <div>
                <h2>Listing departments - {this.state.departments.length}</h2>
                <h2>Add Department</h2>
                <DepartmentForm handleSubmit={this.handleSubmit}/>
                <table border="1">
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.departments.map((department) => {
                        return(  
                        <tr key={department._id}>
                         <td>{department._id}</td> 
                         <td>{department.name}</td>
                        <button onClick={()=>{this.handleRemove(department._id)}}>remove</button></tr>
                        )
                    })}
                     </tbody>
                </table>
            </div>    
        )
    }
}
export default DepartmentList