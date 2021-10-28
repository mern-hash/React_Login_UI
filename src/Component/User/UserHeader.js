import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import {
    Link, useHistory
} from "react-router-dom";
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

export default function UserHeader() {

    const history = useHistory();
    let Userdata = JSON.parse(localStorage.getItem("user-info")),
        data = Userdata['user'],
        id = data['id'];

    Cookies.remove('name')

    const logout = async () => {
        Cookies.remove("user-info")
        sessionStorage.removeItem('user_sid');
        localStorage.clear();
        toast.success("Logout Successfully ")
        history.push("/")
    };

    return (
        <div>
            <div className="background_navbar">
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <div className="heaser_logo">
                        <Navbar.Brand href="#">User DashBoard</Navbar.Brand>
                    </div>
                <Nav className="nav_bar_wrapper">
                    <Nav><Link to={{ pathname: `/profile/${id}` }} className="userheader">Profile</Link></Nav>
                    <Nav><Link to={{ pathname: `/resetpassword/${id}` }} className="userheader">Rest Password</Link></Nav>
                    <Nav><Link to={{ pathname: `/single/${id}` }} className="userheader">Update</Link></Nav>
                    {/*<Nav><span onClick={logout} className="userheader">LogOut</span></Nav>*/}
                </Nav>
                    <div className="header_btn">
                        <Button variant="outline-primary" size="lg" className="login-register-btn login_header" onClick={logout} >
                        Logout
                        </Button>
                    </div>
                </div>
            </Navbar>
            </div>
        </div>
    )
};