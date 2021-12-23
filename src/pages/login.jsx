import Button from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Fragment, useState } from "react";
import React from 'react';
import Example from "../components/NavBar";

// class Login extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {username: localStorage.getItem("username")?localStorage.getItem('username'):'',
//                       password: localStorage.getItem("username")?localStorage.getItem('username'):'',
//                       isLoggedin: false};
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        // this.setState({ isLoggedin: true });
        event.preventDefault();
        // localStorage.setItem("username", this.state.username);
        // localStorage.setItem("password", this.state.password);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        setIsLoggedIn(true);
    }

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        // this.setState({ [name]: value });
        if (name ==="username"){
            setUsername(value);
        }else{
            setPassword(value);
        }
    }

    // render(){ 
    // const isLoggedin = this.state.isLoggedin;
    if (isLoggedIn) {
        return (
            <Fragment>
                <Header />
                {/* <Home username={this.state.username}/> */}
                {/* <p>{this.state.username}</p> */}
                <Example />
                <p>{username}</p>
                <Footer />
            </Fragment>
        )
    } else {
        return (
            <div className="bg-gray-300">
                <Header />
                <div className="m-36">
                    <form>
                        <div className={`text-center block space-y-4`}>
                            <label className="p-4 text-2xl font-bold block">
                                Username:
                                <input className='p-1 focus:outline-none focus:ring-2 focus:ring-blue-600 m-auto block rounded-full'
                                type="text" name="username" value={username} onChange={handleChange} />
                            </label>
                            <label className={`p-4 text-2xl font-bold block`}>
                                Password:
                                <input type="password" className='p-1 m-auto focus:outline-none focus:ring-2 focus:ring-blue-600 block rounded-full'
                                    name="password" value={password} onChange={handleChange} />
                            </label>
                            <Button type="submit" className={`bg-blue-700 w-24 h-10 font-medium text-white text-xl rounded-full`} onClick={handleSubmit} children={'Login'} />
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
// }

export default Login;