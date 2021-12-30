import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from 'react-router-dom';
import useApi from '../hooks/useApi'

const UpdateCustomer = () => {
    let params = useParams();
    console.log(params.customerId);
    const [userDetails, setUserDetails] = useState(null);
    const {isLoading: isloading, error: error, sendRequest: sendApiRequest} = useApi();
    useEffect(() => {
        const requestParam = {url:`http://localhost:8000/api/updatecustomer/${params.customerId}`,headers: {'Content-Type': 'application/json'} }
        sendApiRequest(requestParam, setUserDetails);
    }, [params.customerId])
    return (
        <div>
            <NavBar />
            <br></br>
            <form>
                <h1>update form goes here</h1>
            </form>
            { isloading && <p>loading ...</p> }
            { error && <p>something went wrong</p>}
        </div>
    )
}

export default UpdateCustomer;