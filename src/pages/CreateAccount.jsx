import React from "react";
import NavBar from "../components/NavBar";
import useInput from "../hooks/useInput";

const CreateAccount = () => {
    const {
        enteredValue : enteredName,
        valueIsValid : NameIsValid,
        hasError : NameIsNotValid,
        valueChangeHandler: NameChangeHandler,
        blurHandler: NameBlurHandler,
        resetHandler: NameResetHandler,
    } = useInput()
    const FormIsValid = NameIsValid;
    const submitHandler = (event) => {
        event.preventDefault();
        if (FormIsValid){
            console.log("form succaes");
        }
        console.log(enteredName);
        NameResetHandler();
    }
    return (
    <div>
        <NavBar />
        <form onSubmit={submitHandler}>
            <div>
                <label>Customer Name</label>
                <input 
                    type='text'
                    onBlur={NameBlurHandler}
                    onChange={NameChangeHandler}
                />
                {NameIsNotValid && <p>Name is not valid</p>}
            </div>
        </form>
    </div>
    )
}

export default CreateAccount;