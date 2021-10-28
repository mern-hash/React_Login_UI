import React  from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {
    Link, useHistory
} from "react-router-dom";
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

export default function Header() {
    const history = useHistory();
    Cookies.remove('name')

    const logout = async () => {
        Cookies.remove("user-info")
        sessionStorage.removeItem('user_sid');
        localStorage.clear();
        toast.success("Logout Successfully ")
        history.push("/")
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <div className="heaser_logo">
                        <Navbar.Brand>LOGO</Navbar.Brand>
                    </div>
                <Nav className="nav_bar_wrapper">
                    <Nav><Link to="/list" className="userheader">Home</Link></Nav>
                    <Nav><Link to="/create" className="userheader">About Us</Link></Nav>
                    <Nav><span onClick={logout} className="userheader">Contact</span></Nav>

                </Nav>
                <div className="header_btn">
                    <Button variant="outline-primary" size="lg" className="login-register-btn login_header">
                        <Link to="/login">LOGIN</Link>
                    </Button>{' '}
                    <Button variant="outline-primary" size="lg" className="login-register-btn register_header">
                        <Link to="/Register">Register</Link>
                    </Button>
                </div>
                </div>
            </Navbar>
        </div>
    )
};