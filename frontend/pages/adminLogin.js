import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {useRouter} from "next/router";
import {surveyQuestions} from "../data/surveyQuestions";
import {resourceTrees} from "../data/resourceTrees";
import React from 'react';

class Login extends React.Component{
    state={
        email:'',
        pass:''
    }
    handleChange = (e) =>{
        const {name, value} = e.target
        this.setState({[name]:value})
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        alert("logged in!!!!!!!!!!!!!")
    }
    render(){
        return(
            <div>
                <Navbar isLanding/>

                <img src="/bears/smiling_red_bear.svg" className="rounded-lg mb-6 h-64 mx-auto" style={{top: '50px', position: 'relative'}}/>

                <div style={{top: '50px', position: 'relative'}}>
                    <div className="text-center text-3xl sm:text-5xl font-bold text-gray-900"> Admin Login </div>
                    <form onSubmit = {this.handleSubmit} className="font-sans text-gray-400 font-light login-box" >
                        <input className="login-input" type="email" name="email" placeholder="Email" required/>
                        <input className="login-input" type="password" name="password" placeholder="Password" required/>
                        <button className="bg-red-600 block md:inline-block font-medium text-lg rounded-lg py-3 font-display transition-all duration-200 font-medium hover:bg-red-400 focus:bg-red-400 px-12 mt-8 text-white" onSubmit = {this.handleSubmit}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;