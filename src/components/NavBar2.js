import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const NavBar = () => {
    return (
    <div>
        <Header />
        <ul>
            <li>
                <select>
                    <option><Link to="/createcustomer">Create Customer</Link></option>
                    <option><Link to="/updatecustomer">Update Customer</Link></option>
                    <option><Link to='/deletecustomer'>Delete Customer</Link></option>
                </select>
            </li>
            <li>
                <select>
                    <option> <Link to='/createaccount'>Create Account</Link></option>
                    <option><Link to='/deleteaccount'>Delete Account</Link></option>
                </select>
            </li>
            <li>
                <Link to="/customerstatus">View Customers Status</Link>
            </li>
            <li>
            <Link to="/logout">Logout</Link>
            </li>
        </ul>
    </div>
    );
}

export default NavBar;