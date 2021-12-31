import React from "react";
import NavBar from "../components/NavBar";
import useInput from "../hooks/useInput";

const CreateCustomer = () => {
    const {
        enteredValue: enteredName,
        valueIsValid: NameisValid,
        hasError: NameisnotValid,
        valueChangeHandler: NameChangeHandler,
        blurHandler: NameBlurHandler,
        resetHandler: NameResetHandler,
    } = useInput((value) => { return value.trim() !== '' })
    const {
        enteredValue: enteredId,
        valueIsValid: IdisValid,
        hasError: IdisnotValid,
        valueChangeHandler: IdChangeHandler,
        blurHandler: IdBlurHandler,
        resetHandler: IdResetHandler,
    } = useInput((value) => { return value.toString().length === 9 })
    const {
        enteredValue: enteredSsnId,
        valueIsValid: SsnIdisValid,
        hasError: SsnIdisnotValid,
        valueChangeHandler: SsnIdChangeHandler,
        blurHandler: SsnIdBlurHandler,
        resetHandler: SsnIdResetHandler,
    } = useInput((value) => { return value.toString().length === 9 })
    const {
        enteredValue: enteredAge,
        valueIsValid: AgeisValid,
        hasError: AgeisnotValid,
        valueChangeHandler: AgeChangeHandler,
        blurHandler: AgeBlurHandler,
        resetHandler: AgeResetHandler,
    } = useInput((value) => { return value > 0 })
    const {
        enteredValue: enteredAddress1,
        valueIsValid: Address1isValid,
        hasError: Address1isnotValid,
        valueChangeHandler: Address1ChangeHandler,
        blurHandler: Address1BlurHandler,
        resetHandler: Address1ResetHandler,
    } = useInput((value) => { return value.trim() !== '' })
    const {
        enteredValue: enteredAddress2,
        valueIsValid: Address2isValid,
        hasError: Address2isnotValid,
        valueChangeHandler: Address2ChangeHandler,
        blurHandler: Address2BlurHandler,
        resetHandler: Address2ResetHandler,
    } = useInput((value) => { return value.trim() !== '' })
    const {
        enteredValue: enteredCity,
        valueIsValid: CityisValid,
        hasError: CityisnotValid,
        valueChangeHandler: CityChangeHandler,
        blurHandler: CityBlurHandler,
        resetHandler: CityResetHandler,
    } = useInput((value) => { return value.trim() !== '' })
    const {
        enteredValue: enteredState,
        valueIsValid: StateisValid,
        hasError: StateisnotValid,
        valueChangeHandler: StateChangeHandler,
        blurHandler: StateBlurHandler,
        resetHandler: StateResetHandler,
    } = useInput((value) => { return value.trim() !== '' })
    const FormIsValid = NameisValid && AgeisValid && IdisValid && SsnIdisValid && Address1isValid && Address2isValid && CityisValid && StateisValid;
    const submitHandler = (event) => {
        event.preventDefault();
        const createCustomer = async (url, data) => {
            const response = await fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
                redirect: 'follow'
            })
            return response.text()
        }
        if (FormIsValid) {
            // console.log(enteredName, enteredAge);
            // console.log(enteredCity, enteredId, enteredSsnId, enteredState, enteredAddress1, enteredAddress2)
            createCustomer('localhost:8000/api/createcustomer/', {
                "customer_id": enteredId,
                "customer_ssn_id": enteredSsnId,
                "customer_name": enteredName,
                "age": enteredAge,
                "address_line1": enteredAddress1,
                "address_line2": enteredAddress2,
                "city": enteredCity,
                "state": enteredState
            }).then(result => alert("customer_created_succesfully", result)).catch(error => console.log('error', error))
            NameResetHandler();
            IdResetHandler();
            SsnIdResetHandler();
            AgeResetHandler(); Address1ResetHandler(); Address2ResetHandler(); StateResetHandler();
            CityResetHandler();
        }
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
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="ssnid">SSN-ID</label>
                    </div>
                    <div className="md:w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type='number'
                            maxLength={9}
                            minLength={9}
                            onBlur={SsnIdBlurHandler}
                            onChange={SsnIdChangeHandler}
                            value={enteredSsnId}
                            id="ssnid"
                        />
                        {SsnIdisnotValid && <p>SSN-Id is not valid</p>}
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
                            onBlur={NameBlurHandler}
                            onChange={NameChangeHandler}
                            value={enteredName}
                            id="name"
                        />
                        {NameisnotValid && <p>Name is not valid</p>}
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
                            onBlur={AgeBlurHandler}
                            onChange={AgeChangeHandler}
                            value={enteredAge}
                            id="age"
                        />
                        {AgeisnotValid && <p>Age is not valid</p>}
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
                            onBlur={Address1BlurHandler}
                            onChange={Address1ChangeHandler}
                            value={enteredAddress1}
                            id="address1"
                        />
                        {Address1isnotValid && <p>Address1 is not valid</p>}
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
                            onBlur={Address2BlurHandler}
                            onChange={Address2ChangeHandler}
                            value={enteredAddress2}
                            id="address2"
                        />
                        {Address2isnotValid && <p>Address2 is not valid</p>}
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
                            onBlur={CityBlurHandler}
                            onChange={CityChangeHandler}
                            value={enteredCity}
                            id="city"
                        />
                        {CityisnotValid && <p>City is not valid</p>}
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
                            onBlur={StateBlurHandler}
                            onChange={StateChangeHandler}
                            value={enteredState}
                            id="state"
                        />
                        {StateisnotValid && <p>State is not valid</p>}
                    </div>
                </div>
                <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" disabled={!FormIsValid}>Create Customer</button>
                </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default CreateCustomer;