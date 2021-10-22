import React, { useState } from 'react';
import UserHeader from './UserHeader';
import qs from 'querystring';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import {APIURL} from '../../Constant';

export default function Changepass() {

    const [password1, setPassword1] = useState(""),
        [password2, setPassword2] = useState(""),
        history = useHistory(),
        UserData = JSON.parse(localStorage.getItem("user-info")),
        token = UserData['user'],
        id = token['id'];

    async function passUser() {
        let item = { password1, password2 },
            result = await fetch(`${APIURL}/reset-password/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*"
            },
            body: qs.stringify(item)
        });
        let response = await result.json();
        if (result.status === 200 && response.success){
            toast.success("Password Reset Successfully ")
            history.push("/userheader")
        }
        else{
            toast.error("Something went wrong ")
        }
    }
    return (
        <div>
            <UserHeader />
            <div className="container pt-5">
                <div className="row myrow d-flex justify-content-center align-items-center;">
                    <div className="col-lg-8 col-sm-12 formwrapper" >
                        <h1 className="pt-3 pb-3 text-center">Reset Password</h1>
                        <input type="text" placeholder="New password" value={password1} onChange={(e) => setPassword1(e.target.value)}
                               className="form-control" />
                        <input type="text" placeholder="Confirmed New password" value={password2} onChange={(e) => setPassword2(e.target.value)}
                               className="form-control" />
                        <button className="btn btn-primary mb-3" onClick={passUser}>Reset Password</button>
                    </div>
                </div>
            </div>
        </div>
    )
};
