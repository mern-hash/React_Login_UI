import React  from 'react';
import { Navbar, Nav } from 'react-bootstrap';
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
                <Navbar.Brand>Admin Dashboard</Navbar.Brand>
                <Nav className="me-auto nav_bar_wrapper">
                    <Nav><Link to="/list" className="userheader">List</Link></Nav>
                    <Nav><Link to="/create" className="userheader">Create</Link></Nav>
                    <Nav><span onClick={logout} className="userheader">LogOut</span></Nav>
                </Nav>
            </Navbar>
        </div>
    )
};