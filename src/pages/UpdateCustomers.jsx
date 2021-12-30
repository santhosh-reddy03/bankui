import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import useInput from "../hooks/useInput";

const UpdateCustomers = () => {
    const {
        enteredValue: enteredId,
        valueIsValid: IdisValid,
        hasError: IdisnotValid,
        valueChangeHandler: IdChangeHandler,
        blurHandler: IdBlurHandler,
        resetHandler: IdResetHandler,
    } = useInput((value) => { return value.toString().length === 9 })
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        if (IdisValid){
            navigate(`/updatecustomer/${enteredId}`)
        }
        IdResetHandler();
    }
    
    return (
        <div>
            <NavBar />
            <br></br>
            <div className="flex flex-col justify-center items-center">
            <form onSubmit={submitHandler} className="w-full max-w-sm items-center">
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
                            onBlur={IdBlurHandler}
                            onChange={IdChangeHandler}
                            value={enteredId}
                            id="id"
                        />
                        {IdisnotValid && <p>Id is not valid</p>}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={!IdisValid}>Update</button>
                </div>
                </div>
            </form>
            </div>
        </div>
        )

}

export default UpdateCustomers;