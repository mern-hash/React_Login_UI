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
            <div className="background_navbar">
            <Navbar bg="dark" variant="dark">
                <div className="container">
                    <div className="heaser_logo">
                        <Navbar.Brand>Admin Dashboard</Navbar.Brand>
                    </div>
                <Nav className="nav_bar_wrapper">
                    <Nav><Link to="/list" className="userheader">List</Link></Nav>
                    <Nav><Link to="/create" className="userheader">Create</Link></Nav>
                    {/*<Nav><span onClick={logout} className="userheader">Logout</span></Nav>*/}
                </Nav>
                    <div className="header_btn">
                        <Button variant="outline-primary" size="lg" className="login-register-btn login_header" onClick={logout}>
                            Logout
                        </Button>
                        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                        {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                        {/*    <NavDropdown.Divider />*/}
                        {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                        {/*</NavDropdown>*/}
                    </div>
                </div>
            </Navbar>
            </div>
        </div>

    )
};