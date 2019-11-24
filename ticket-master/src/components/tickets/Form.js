// import React from 'react'
// import Select from 'react-select'
// import axios from '../../config/axios';

// export default class TicketForm extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             name:'',
//             code: '',
//            departments: [],
//            priority: '',
//            message: '',
//            isHigh: false,
//            isMedium: false,
//            isLow: false,
//            message:''
//         }
//     }

//     axios.get('/departments', {
//         headers: {
//            'x-auth': localStorage.getItem('authToken')
//                 }
//             })
//             .then(response => {
//                  const departments = response.data
//                  console.log(response.data)
//                //  console.log(response.data._id)
//                  this.setState({departments})
//             })
//             .catch(err => {
//                 console.log(err)
//             })
        
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const formData = {
//             code: this.state.code,
//             message: this.state.message,
//             department: this.state.selectedDepartmentOption._id,
//             priority: this.state.priority
//             })
//         }
//         console.log(formData)
//         this.props.handleSubmit(formData)

//         this.setState({
//             selectedCustomerOption: '',
//             selectedDepartmentOption: '',
//             selectedEmployeeOption: '',
//             message: '',
//             code: '',
//             priority: ''
//         })
//     }

//     handleChange = (e) => {
//         console.log("Event: ", e)
//         const target = e.target
//         console.log("Event Target: ", target)
//         const name = target.name
//         const value = target.value
//         this.setState({
//             [name]: value
//         })
//     }

//     handleCustomerChange = (selectedCustomerOption) => {
//         console.log(`Customer Option selected: `, selectedCustomerOption);
//         this.setState({ selectedCustomerOption });
//         console.log(`Customer Option selected: `, selectedCustomerOption);
//     }

//     handleDepartmentChange = (selectedDepartmentOption) => {
//         console.log("Selected Department: "+selectedDepartmentOption._id)
//         const employees = this.employeesInfo.filter(employee => employee.department._id === selectedDepartmentOption._id)
//         console.log('this.employeesInfo', this.employeesInfo, 'filterd employees', employees)

//         this.setState({ selectedDepartmentOption, employees });
        
//     }

//     handleEmployeeChange = (selectedEmployeeOption) => {
//         this.setState({ selectedEmployeeOption })
//         console.log(`Employee Option selected: `, selectedEmployeeOption);
//     //    console.log(`Employee Option selected id: `, selectedEmployeeOption[0]._id);
//     }

//     render() {
//         console.log('render', this.state)
//         return (
//             <div>
//                 <h2>Add Ticket</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Code
//                     </label>
//                     <input type="text" value={this.state.code} onChange={this.handleChange} name="code"/>
//                     <br />
//                     <label>
//                         Name
//                     </label>
//                     <Select value={this.state.selectedCustomerOption} 
//                             options={
//                                 this.state.customers.map(customer => {
//                                     return Object.assign(customer, {value: customer._id, label: customer.name})
//                                 })
//                             } 
//                             onChange={this.handleCustomerChange}/>
//                     <label>
//                         Department
//                     </label>
//                     <Select value={this.state.selectedDepartmentOption} 
//                             options={
//                                 this.state.departments.map(department => {
//                                     return Object.assign(department, {value: department._id, label: department.name})
//                                 })
//                             } 
//                             onChange={this.handleDepartmentChange}/>
//                     <label>
//                         Employees
//                     </label>
//                     <Select value={this.state.selectedEmployeeOption} 
//                             options={
//                                 this.state.employees.map(employee => {
//                                     return Object.assign(employee, {value: employee._id, label: employee.name})
//                                 })
//                             } 
//                             onChange={this.handleEmployeeChange} isMulti={true}/>
//                     <br />
//                     <div>
//                         <input type="radio" value="high" onChange={this.handleChange} name="priority"/> High
//                         <input type="radio" value="medium" onChange={this.handleChange} name="priority"/> Medium
//                         <input type="radio" value="low" onChange={this.handleChange} name="priority"/> Low
//                     </div>
//                     <textarea value={this.state.message} onChange={this.handleChange} rows={10} cols={100} name="message"/>
//                     <br />
//                     <input type="submit" value="submit" />
//                 </form>
//             </div>
//         )
//     }
// }

import React from 'react';
import axios from '../../config/axios'

class TicketsForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name :props.ticket ? props.ticket.name:'',
            code:props.ticket ? props.ticket.code:'',
            department:props.ticket ? props.ticket.department:'',
            departments:props.ticket ? props.ticket.departments: [],
            priority:props.ticket ? props.ticket.priority: 'High',
            message: props.ticket ? props.ticket.message:''
        }    
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response => {
            //console.log(response.data)
            const departments = response.data
            this.setState({departments})
        })
        .catch(err => {
            console.log(err)
        })
}


    handleChange(e){
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
       e.preventDefault()
       const formData={
           name:this.state.name,
           code:this.state.code,
           department:this.state.department,
           priority:this.state.priority,
           message:this.state.message
       }
       console.log(formData)
       this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name </label>
                            <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                        </div>
                            <label>Code 
                        <input type="text" value={this.state.code} onChange={this.handleChange} name="code"/>
                    </label><br/>
                  
                    detartment:
                    <select value={this.state.department} onChange={this.handleChange} name="department">
                        <option value="">select</option>
                        {
                            this.state.departments.map(department => {
                                return <option value={department._id} key={department._id}>{department.name}</option>
                            })
                        }
                    </select><br/>

                    <label>priority
                    <div>
                        <input type="radio" value="High" onChange={this.handleChange} name="priority"/> High<br/>
                        <input type="radio" value="Medium" onChange={this.handleChange} name="priority"/> Medium<br/>
                        <input type="radio" value="Low" onChange={this.handleChange} name="priority"/> Low<br/>
                     </div>
                    </label>

                    <label>message<br/>
                        <textarea value={this.state.message} onChange={this.handleChange}  name="message"/>
                    </label><br/>
                  
                  <input type="submit" className="btn btn-primary"/>
                  </div>
                </form>
            </div>
        )
    }
}
export default TicketsForm