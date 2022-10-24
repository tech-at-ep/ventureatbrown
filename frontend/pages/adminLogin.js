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
    }
    render(){
        return(
            <div>
                <img src="/bears/smiling_red_bear.svg" className="rounded-lg mb-6 h-64 mx-auto"/>
                <form onSubmit = {this.handleSubmit} >
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <button onSubmit = {this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}
export default Login;