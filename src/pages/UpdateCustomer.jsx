import React, { useCallback, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi'

const UpdateCustomer = () => {
    let params = useParams();
    const [FormIsValid, setFormIsValid] = useState(true);
    // console.log(params.customerId);
    const [userDetails, setUserDetails] = useState({});
    const usrDetailHandler = (data) => {
        setUserDetails(data);
    }
    const {isLoading: isloading, error: error, sendRequest: sendApiRequest} = useApi();
    useEffect(() => {
        const requestParam = {url:`http://localhost:8000/api/updatecustomer/${params.customerId}`, headers: {'Content-Type': 'application/json'} }
        sendApiRequest(requestParam, usrDetailHandler);
    }, [params.customerId, sendApiRequest])

    const NameChangeHandler = () => {
        console.log("name");
    }

    const AgeChangeHandler = () => {
        console.log("age");
    }

    const Address1ChangeHandler = () => {
        console.log("address1")
    }

    const Address2ChangeHandler = () => {
        console.log("address2");
    }

    const CityChangeHandler = () => {
        console.log("city")
    }

    const StateChangeHandler = () => {
        console.log("state");
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(userDetails);
    }

    return (
        <div>
            <NavBar />
            <br></br>
            <div className="flex flex-col justify-center items-center">
                <form className="w-full max-w-sm items-center" onSubmit={submitHandler}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="id">Customer ID</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='number'
                            maxLength={9}
                            minLength={9}
                            disabled
                            value={userDetails.customer_id}
                            id="id"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="ssnid">Customer SSN</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='number'
                            maxLength={9}
                            minLength={9}
                            disabled
                            value={userDetails.customer_ssn_id}
                            id="ssnid"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">Name</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='text'
                            onChange={NameChangeHandler}
                            value={userDetails.customer_name}
                            id="name"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="age">Age</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='number'
                            onChange={AgeChangeHandler}
                            value={userDetails.age}
                            id="age"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="address1">Address 1</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='text'
                            onChange={Address1ChangeHandler}
                            value={userDetails.address_line1}
                            id="address1"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="address2">Address 2</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='text'
                            onChange={Address2ChangeHandler}
                            value={userDetails.address_line2}
                            id="address2"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="city">City</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='text'
                            onChange={CityChangeHandler}
                            value={userDetails.city}
                            id="city"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="state">State</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='text'
                            onChange={StateChangeHandler}
                            value={userDetails.state}
                            id="state"
                        />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={!FormIsValid}>Update Customer</button>
                </div>
                </div>
                </form>
            </div>
            { isloading && <p>loading ...</p> }
            { error && <p>something went wrong</p> && console.log(error)}
        </div>
    )
}

export default UpdateCustomer;