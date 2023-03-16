import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./sidebar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';




function Sidebar() {
    const location = useLocation();

    const profile = "/assets/Profile User/profile.png";

    const [activeLink, setActiveLink] = useState();



    return (
        <Navbar className="sidebar" >
            <Container>

                <div className="bgprof">
                    <img className="Profile-admin" src={profile} width="132px" alt="profile" />
                    <p className="ms-3">Fahmi Fahrizal</p>

                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto linkSidebar">
                        <Link to="/dashboard" className="menu nav-link" onClick={() => setActiveLink('link1')}
                            id={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
                        <Link to="/storage" className="menu nav-link" onClick={() => setActiveLink('link2')}
                            id={location.pathname === '/storage' ? 'active' : ''}>Storage</Link>
                        <Link to="/dataUsers" className="menu nav-link" onClick={() => setActiveLink('link3')}
                            id={location.pathname === '/dataUsers' ? 'active' : ''}>Data Users</Link>
                        <Link to="/order" className="menu nav-link" onClick={() => setActiveLink('link4')}
                            id={location.pathname === '/order' ? 'active' : ''}>Order</Link>
                    </Nav>
                    <Nav className="you-auto ">
                        <Nav.Link className="menuBottom text-white" href="#deets">Setting</Nav.Link>
                        <Nav.Link className="menuBottom text-white" eventKey={2} href="/administrator">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Sidebar;