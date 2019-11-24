import React from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

import CustomersList from './components/customers/List'
import CustomerNew from'./components/customers/New'
import CustomerEdit from'./components/customers/Edit'
import CustomerForm from'./components/customers/Form'
import CustomerShow from'./components/customers/Show'

import DepartmentList from'./components/departments/List'
import DepartmentForm from'./components/departments/Form'

import EmployeeList from'./components/employees/List'
import EmployeeForm from'./components/employees/Form'
import EmployeeNew from './components/employees/New'
import EmployeeShow from './components/employees/Show'

import TicketList from './components/tickets/List'
import TicketNew from './components/tickets/New'
import TicketForm from'./components/tickets/Form'
import TicketShow from'./components/tickets/Show'


function App() {
  return (
    <BrowserRouter>
    <div>
      <h1>Ticket Master</h1>
      <Link to="/customers">Customers</Link> ||
      <Link to="/departments">Departments</Link>||
      <Link to="/employees">Employees</Link>||
      <Link to="/tickets">Tickets</Link>
      

      <Switch>
      <Route path="/customers" component={CustomersList} exact={true}/>
      <Route path="/customers/new" component={CustomerNew}/>
      <Route path="/customers/form" component={CustomerForm} exact={true}/>
      <Route path="/customers/edit/:id" component={CustomerEdit}/>
      <Route path="/customers/show/:id" component={CustomerShow}/>

      <Route path="/departments" component={DepartmentList}/>
      <Route path="/departments/form" component={DepartmentForm}/>

      <Route path="/employees" component={EmployeeList} exact={true}/>
      <Route path="/employees/new" component={EmployeeNew}/>
      <Route path="employees/form" component={EmployeeForm} excat={true}/>
      <Route path="employees/show/:id" component={EmployeeShow} />

      <Route path="/tickets" component={TicketList} exact={true}/>
      <Route path="/tickets/new" component={TicketNew}/>
      <Route path="/tickes/form" component={TicketForm}/> exact={true}/>
      <Route path="/tickets/show/:id" component={TicketShow}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
export default App;