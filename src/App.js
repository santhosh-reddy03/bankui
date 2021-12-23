import './App.css';
import React from 'react'
import Login from './pages/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CreateCustomer from './pages/CreateCustomer';
import UpdateCustomer from './pages/UpdateCustomer';
import DeleteCustomer from './pages/DeleteCustomer';
import CreateAccount from './pages/CreateAccount'
import CustomerStatus from './pages/CustomerStatus';
import Logout from './pages/Logout';
import DeleteAccount from './pages/DeleteAccount'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/createcustomer' element={<CreateCustomer />} />
        <Route path='/' element={<Login />} />
        <Route path='updatecustomer' element={<UpdateCustomer />}>
          <Route path=':customerId' element={<UpdateCustomer />} />
        </Route>
        <Route path='deletecustomer' element={<DeleteCustomer />} />
        <Route path='createaccount' element={<CreateAccount />} />
        <Route path='deleteaccount' element={<DeleteAccount />} />
        <Route path='logout' element={<Logout />} />
        <Route path='customerstatus' element={<CustomerStatus />} />
      </Routes>
    </Router>
  )
}

export default App;
