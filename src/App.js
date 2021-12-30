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
import UpdateCustomers from './pages/UpdateCustomers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} >
        <Route
          path="*"
          element={
          <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
          </main>
            }
          />
        </Route>
        <Route path='/createcustomer' element={<CreateCustomer />} />
        <Route path='/updatecustomer' element={<UpdateCustomers />} />
        <Route path='/updatecustomer/:customerId' element={<UpdateCustomer />} />
        <Route path='/deletecustomer' element={<DeleteCustomer />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/deleteaccount' element={<DeleteAccount />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/customerstatus' element={<CustomerStatus />} />
      </Routes>
    </Router>
  )
}

export default App;
