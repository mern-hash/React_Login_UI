import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import qs from 'querystring';
import UserHeader from './UserHeader'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import {APIURL} from '../../Constant';

function SingleU() {

    const [data, setData] = useState([]),
        params = useParams(),
        history = useHistory();

    useEffect(async () => {
        let response = await fetch(`${APIURL}/${params.id}`),
            { result } = await response.json();
        setData(result)
    }, []);

    const updateInputValue = (e) => {
        let { target: { value, name } } = e,
             updatedState = Object.assign({}, data);
        updatedState[name] = value;
        setData(updatedState);
    };

    const editUser = async (id) => {
        let result = await fetch(`${APIURL}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*"
            },
            body: qs.stringify(data)
        });
        let response = await result.json();
        if (result.status === 200 && response.success) {
            toast.success("User Updated Successfully ")
            history.push("/userheader")
        } else {
            toast.error("Something Went wrong ")
        }
    };
    return (
        <div>
            <UserHeader />
            <div className="container pt-5">
                <div className="row myrow d-flex justify-content-center align-items-center;">
                    <div className="col-lg-8 col-sm-12 formwrapper" >
                        <h1>User Update</h1>

                        <input type="text" name="name" defaultValue={data.name} onChange={updateInputValue} placeholder="Enter Name" className="form-control" />
                        <input type="email" name="email" defaultValue={data.email} onChange={updateInputValue} placeholder="Enter Email" className="form-control" />
                        <input type="text" name="gender" defaultValue={data.gender} onChange={updateInputValue} placeholder="Enter Gender" className="form-control" />
                        <input type="text" name="age" defaultValue={data.age} onChange={updateInputValue} placeholder="Enter Age" className="form-control" />
                        <input type="text" name="phone" defaultValue={data.phone} onChange={updateInputValue} placeholder="Enter Phone" className="form-control" />

                        <span></span><br />

                        <button className="btn btn-primary mb-3" onClick={() => editUser(data._id)} >Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleU;
