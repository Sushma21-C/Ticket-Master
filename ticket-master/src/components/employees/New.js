import React from 'react'
import EmployeeForm from './Form'
import axios from '../../config/axios';

class EmployeeNew extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(formData) {
        axios.post('/employees', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response.data)
                
                    this.props.history.push('/employees')
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <h2>Add Employee</h2>
                <EmployeeForm handleSubmit={this.handleSubmit} formTitle="adding employee"/>
            </div>
        )
    }
}
export default EmployeeNew