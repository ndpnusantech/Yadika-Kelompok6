import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./sidebar.css";
import React, { useState } from 'react';




function CollapsibleExample() {
<<<<<<< HEAD
  const profile = "/assets/Profile User/person-circle 1.svg";
  const [activeLink, setActiveLink] = useState(null);
 
=======
    const profile = "/assets/Profile User/person-circle 1.svg";

    const [activeLink, setActiveLink] = useState(null);
>>>>>>> 8e07f489a515674ad798531d36f12b85328703e5



    return (
        <Navbar className="nav" >
            <Container>
                <div className="bgprof">
                    <img className="Profile-admin" src={profile} width="132px" alt="profile" />
                    <p>Fahmi Fahrizal</p>

                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="menu" onClick={() => setActiveLink('link1')}
                            id={activeLink === 'link1' ? 'active' : ''} >Dashboard</Nav.Link>
                        <Nav.Link className="menu" onClick={() => setActiveLink('link2')}
                            id={activeLink === 'link2' ? 'active' : ''} >Storage</Nav.Link>
                        <Nav.Link className="menu" onClick={() => setActiveLink('link3')}
                            id={activeLink === 'link3' ? 'active' : ''} >Data User</Nav.Link>
                        <Nav.Link className="menu" onClick={() => setActiveLink('link4')}
                            id={activeLink === 'link4' ? 'active' : ''} >Order</Nav.Link>


                    </Nav>
                    <Nav className="you-auto">
                        <Nav.Link className="menu" href="#deets">Setting</Nav.Link>
                        <Nav.Link className="menu" eventKey={2} href="#memes">
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CollapsibleExample;