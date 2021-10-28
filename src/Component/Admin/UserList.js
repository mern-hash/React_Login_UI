import React, {useEffect, useState} from 'react';
import {Button, Form, FormControl, Table} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import qs from "querystring";
import Header from "./Header";
import {toast} from 'react-toastify'

import {APIURL} from '../../Constant';

export default function UserList() {

    const history = useHistory(),
        Token = JSON.parse(localStorage.getItem("user-info")),
        Data = Token['user'],
        brearer = Data['token'];

    const [data, setData] = useState([]),
        [msg, updateMsg] = useState("");
    useEffect(() => {
         async function fetchMyAPI() {
            try{
                let result = await fetch(`${APIURL}/list`, {
                    headers: {
                        'Authorization': `Bearer ${brearer}`,
                    },
                });
                result = await result.json();
                setData(result)
            }catch(e){
                console.error(e);
            }

        }
        fetchMyAPI();
    }, [])

    const onEdit = (id) => {
        let path = `update/${id}`;
        history.push(path);
    }


    const onDelete = async (id) => {
        const currentData = data,
              updatedData = data.userData.filter(val => val._id !== id);
        setData({ userData: updatedData });
        let result = await fetch(`${APIURL}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                "Accept": "*/*",
            },
            body: qs.stringify(data)
        });

        let response = await result.json();
        if (result.status === 200) {
            toast.error("User Deleted Successfully ")
        } else {
            setData({ userData: currentData });
            updateMsg(response.error)
        }
    }
    return (
        <div>
        <div>
            <Header />
        </div>
            <div className="user_top_bar">
            <div className="container">
                <div className="row search_bar">
                    <div className="col-md-3">
                        <h1>User List</h1>
                    </div>
                    <div className="col-md-3">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">

                    </div>
                </div>
            </div>
            <span>{msg}</span>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Age</td>
                                <td>UserType</td>
                                <td>Phone</td>
                                <td>Edit</td>
                                <td>Remove</td>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                data.userData && data.userData.map(item => (
                                    <tr key = {item._id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.age}</td>
                                        <td>{item.userType}</td>
                                        <td>{item.phone}</td>
                                        <td><span onClick={() => onEdit(item._id)} className="edit">Edit</span></td>
                                        <td><span className="delete" onClick={() => onDelete(item._id)}>Delete</span></td>

                                    </tr>

                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

        </div>
    )
};
