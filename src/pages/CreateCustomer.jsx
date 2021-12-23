import React from "react";
import NavBar from "../components/NavBar";
import useInput from "../hooks/useInput";

const CreateCustomer = () => {
    const {
        enteredValue: enteredFirstName, 
        valueIsValid : FirstNameisValid,
        hasError: FirstNameisnotValid,
        valueChangeHandler: FirstNameChangeHandler,
        blurHandler: FirstNameBlurHandler,
        resetHandler: FirstNameResetHandler,
      } = useInput((value)=> {return value.trim() !== ''})
    return (
        <div>
            <NavBar />
            <h1>create customer</h1>
        </div>
        )
}

export default CreateCustomer;