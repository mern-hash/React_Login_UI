import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import qs from 'querystring'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import validateInfo from './Admin/validateInfo';
import _ from "lodash";

import {APIURL} from '../Constant';

export default function Login() {
    const [values, setValues] = useState({
            email: "",
            password: "",
        }),
        history = useHistory(),
        [errors, setErrors] = useState({}),
        handleChange = (event) => {
            setValues({
                ...values,
                [event.target.name]: event.target.value,
            })
        };

    async function handleFormSubmit(event) {

        let isValid = validateInfo(values);
        if(_.size(isValid) !== 0){
            setErrors(validateInfo(values))
        }
        else {
            let item = values

            let result = await fetch(`${APIURL}/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept": "*/*"
                },
                body: qs.stringify(item)
            });
            let response = await result.json();
            const data = response['user'];

            if (result.status === 200 && response.success) {
                if (data['userType'] === "user") {
                    localStorage.setItem("user-info", JSON.stringify(response))
                    Cookies.set("user-info", JSON.stringify(response))
                    toast.success("Login Successfully")
                    history.push("/userdashboard")
                }
                else if (data['userType'] === "admin") {
                    localStorage.setItem("user-info", JSON.stringify(response))
                    Cookies.set("user-info", JSON.stringify(response))
                    toast.success("Login Successfully")
                    history.push("/list")
                }
                else {
                    toast.error("Incorrect email and password");
                }
            }
            else if (response.email) {
                toast.error("Incorrect email ");
            }
            else if (response.password) {
                toast.error("Incorrect password ");
            }
            else {
                toast.error("Incorrect email and password");
            }
        }
    }
    return (
        <div className="login">
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center;">
                <div className="col-lg-10 col-sm-12 formwrapper" >
                    <div className="row">
                        <div className="col-lg-6 col-sm-12 login_field" >
                            <div className="login_field_inner">
                                <h1 className="pt-3 pb-3">Login</h1>
                                <label>Email Address</label>
                                <input type="email" name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" className="form-control" />{errors.email && <p className="error">{errors.email}</p>}
                                <label>Password</label>
                                <input type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter Password" className="form-control" />{errors.password && <p className="error">{errors.password}</p>}
                                <p className="forgetpassword" ><Link to={'/forgetpassword'}>Forget Password ?</Link></p>
                                <button className="btn btn-primary" onClick={handleFormSubmit}>Login</button>
                                <p className="register" >Don't have an account?<Link to={'/register'}>Sign up</Link></p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 login_gif" >
                            <div className="login_gif_inner">
                                <img src="animation_1st.gif" alt="business-analyst" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
};




