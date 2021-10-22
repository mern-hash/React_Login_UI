import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import qs from 'querystring';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

import {APIURL} from '../Constant';

export default function Changepass() {

    const location = useLocation(),
        paths = location.pathname.split('/'),
        token = paths[2],
        [password, setPassword] = useState(""),
        [password2, setPassword2] = useState(""),
        history = useHistory();

    let decoded = jwt_decode(token),
        id = decoded.id;

    async function changeUser() {
        let item = { password, password2 },
            result = await fetch(`${APIURL}/change-password/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*"
            },
            body: qs.stringify(item)
        }),
            response = await result.json();

        if (result.status === 200 && response.success) {
            toast.success("Password Change Successfully ")
            history.push("/login")
        }
        else {
            toast.error("Incorrect email and password");
        }
    }
    return (
        <div className="container pt-5">
            <div className="row myrow d-flex justify-content-center align-items-center;">
                <div className="col-lg-8 col-sm-12 formwrapper" >
                    <h1 className="pt-3 pb-3 text-center">Change Password</h1>
                    <input type="text" placeholder="New password" value={password} onChange={(e) => setPassword(e.target.value)}
                        className="form-control" />
                    <input type="text" placeholder="Confirmed New password" value={password2} onChange={(e) => setPassword2(e.target.value)}
                        className="form-control" />
                    <button className="btn btn-primary mb-3" onClick={changeUser}>Change Password</button>
                </div>
            </div>
        </div>
    )
};
