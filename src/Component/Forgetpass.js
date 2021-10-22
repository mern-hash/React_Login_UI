import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import qs from 'querystring';
import { toast } from 'react-toastify';

import {APIURL} from '../Constant';


const Forgetpass = () => {
    const [email, setEmail] = useState(""),
         history = useHistory();

    async function link() {
        let item = { email };
        if (email === '') {
            toast.error("Empty Email id ")
            return
        }
        let result = await fetch(`${APIURL}/forgotpassword`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*",
            },
            body: qs.stringify(item)
        })

        let response = await result.json();
        if (result.status === 200 && response.success) {
            toast.success("Password reset link sent to your email account")
            history.push("/login")
        }
        else {
            toast.error("User Invalid");
        }
    }

    return (
        <div className="container pt-5">
            <div className="row myrow d-flex justify-content-center align-items-center;">
                <div className="col-lg-8 col-sm-12 formwrapper" >
                    <h1 className="pt-3 pb-3 text-center">Forget Password</h1>
                    <input type="text" placeholder
                        ="enter email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                    <button className="btn btn-primary mb-3" onClick={link}>Send Link to Email</button>
                    <p className="md7" ><Link to={'/login'}>Back to Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Forgetpass;