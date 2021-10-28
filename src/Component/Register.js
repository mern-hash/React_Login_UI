import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import qs from 'querystring';
import { toast } from 'react-toastify'
import {validation, validateField} from './Validation';
import _ from "lodash";

import {APIURL} from '../Constant';

const Register = () => {
        const [values, setValues] = useState({
                name: "",
                email: "",
                password: "",
                gender: "",
                age: "",
                phone: "",
                userType: "user",
        });
        const history = useHistory();
        const [errors, setErrors] = useState({});

        const handleChange = (e) => {
                const name = e.target.name,
                      value = e.target.value;

                setValues({
                        ...values,
                        [name]: value,
                })
        }

        const onBlur = (e) =>{
                debugger;
                console.log("errors", errors);
                let newError = Object.assign({}, errors);
                const name = e.target.name,
                    value = e.target.value;
                let error = validateField(name, value, values);
                if(newError.hasOwnProperty(name) && !error.hasOwnProperty(name)){
                       delete newError[name];
                }
                else{
                        newError[name] = error[name];
                }
                setErrors(newError);
        }
        async function handleFormSubmit(event) {

                let errors = validation(values);
                if (_.size(errors) !== 0 ) { setErrors(errors) }
                else {
                        let item = values
                        let result = await fetch(`${APIURL}/Register`, {
                                method: 'POST',
                                headers: {
                                        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                                        "Accept": "*/*"
                                },
                                body: qs.stringify(item)
                        });
                        result = await result.json();
                        if (result.success) {
                                toast.success("Registeration user successfull")
                                history.push("/login")
                        }
                        else {
                                toast.error("Email Already Exists")
                        }
                }
        }

        return (<div className="register_form">
                    <div className="container">
                            <div className="row d-flex justify-content-center align-items-center;" >
                                    <div className="col-lg-10 col-sm-12 formwrapper">
                                            <div className="row">
                                                    <div className="col-lg-6 col-sm-12 register_gif" >
                                                            {/*<div className="register_gif_heading">*/}
                                                            {/*        <h1>Heading</h1>*/}
                                                            {/*        <p>Para...Para...Para...Para...Para...Para...Para...</p>*/}
                                                            {/*</div>*/}
                                                            <div className="register_gif_inner">
                                                                    <h1>Heading</h1>
                                                                    {/*<p>Para...Para...Para...Para...Para...Para...Para...</p>*/}
                                                                    <img src="animation_2nd.gif" alt="business-analyst" />
                                                            </div>
                                                    </div>
                                                    <div className="col-lg-6 col-sm-12 register_field" >
                                                            <div className="register_field_inner">
                                                            <h1>Register</h1>
                                                            <div className="row">
                                                                    <div className="col-lg-6 col-sm-12" >
                                                                        <label>Full Name</label>
                                                                        <input autoComplete="off" type="text" name="name" onBlur={onBlur} value={values.name} onChange={handleChange} placeholder="Enter Name" className="form-control" />{errors.name && <p className="error">{errors.name}</p>}
                                                                    </div>
                                                                    <div className="col-lg-6 col-sm-12" >
                                                                        <label>Email</label>
                                                                        <input autoComplete="off" type="email"  onBlur={onBlur} name="email" value={values.email} onChange={handleChange} placeholder="Enter Email" className="form-control" />{errors.email && <p className="error">{errors.email}</p>}
                                                                    </div>
                                                                    <div className="col-lg-6 col-sm-12" >
                                                                            <label>Age</label>
                                                                        <input autoComplete="off" type="number"  onBlur={onBlur} name="age" value={values.age} onChange={handleChange} placeholder="Enter Age" className="form-control" min="1" max="65" />{errors.age && <p className="error">{errors.age}</p>}
                                                                    </div>
                                                                    <div className="col-lg-6 col-sm-12" >
                                                                            <label>Phone No.</label>
                                                                         <input autoComplete="off" type="number"  onBlur={onBlur} name="phone" value={values.phone} onChange={handleChange} placeholder="Enter Phone" className="form-control" min="1" />{errors.phone && <p className="error">{errors.phone}</p>}
                                                                    </div>
                                                                    <div className="col-lg-6 col-sm-12" >
                                                                            <label>Password</label>
                                                                        <input autoComplete="new-password"  onBlur={onBlur} type="password" name="password" value={values.password} onChange={handleChange} placeholder="Enter Password" className="form-control" />{errors.password && <p className="error">{errors.password}</p>}
                                                                    </div>
                                                                    <div className="col-lg-6 col-sm-12" >
                                                                            <label>Conform Password</label>
                                                                            <input autoComplete="new-password"  onBlur={onBlur} type="password" name="conform_password" value={values.conform_password} onChange={handleChange} placeholder="Enter Password" className="form-control" />{errors.conform_password && <p className="error">{errors.conform_password}</p>}
                                                                    </div>
                                                                    <div className="col-lg-6 col-sm-12" >
                                                                            <label>Gender</label>
                                                                         <select name="gender" value={values.gender} onBlur={onBlur} onChange={handleChange} className="form-control" >
                                                                            <option >Select Gender</option>
                                                                            <option onChange={handleChange}  >Male</option>
                                                                            <option onChange={handleChange} >Female</option>
                                                                            <option onChange={handleChange} >Others</option>
                                                                        </select>{errors.gender && <p className="error">{errors.gender}</p>}
                                                                    </div>
                                                                    <div className="col-12" >
                                                                        <button className="btn btn-primary mb-3" onClick={handleFormSubmit} >Register</button>
                                                                    </div>
                                                                        <p className="md7" >Already have an account?<Link to={'/login'}>Login</Link></p>
                                                              </div>
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </div>
        )
};

export default Register;

