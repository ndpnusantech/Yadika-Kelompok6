import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./sidebar.css";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';





function Sidebar() {
    const location = useLocation();

    const profile = "/assets/Profile User/profile.png";

    const [activeLink, setActiveLink] = useState();

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
          href=""
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </a>
      ));
      
      // forwardRef again here!
      // Dropdown needs access to the DOM of the Menu to measure it
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
          const [value, setValue] = useState('');
      
          return (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
             
              <ul className="list-unstyled">
                {React.Children.toArray(children).filter(
                  (child) =>
                    !value || child.props.children.toLowerCase().startsWith(value),
                )}
              </ul>
            </div>
          );
        },
      );
    






    return (

        <Navbar className="sidebar " >

            <Container>

                <div className="bgprof">
                    <img className="Profile-admin" src={profile} width="132px" alt="profile" />
                    <p className="ms-3">Fahmi Fahrizal</p>

                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto linkSidebar text-center pe-3">
                        <Link to="/dashboard" className="menu nav-link" onClick={() => setActiveLink('link1')}
                            id={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
                        <div className='dropdown'>
                        <Dropdown>
    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
      Obat
    </Dropdown.Toggle>

    <Dropdown.Menu as={CustomMenu}>
      <Dropdown.Item href='#' eventKey="1"><h6>obat</h6></Dropdown.Item>
      <Dropdown.Item href='#' eventKey="2"><h6>kategori penyakit</h6></Dropdown.Item>
      <Dropdown.Item href='#' eventKey="3" ><h6>kategori obat</h6></Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <br />
                        </div>
                        <Link to="/dataUsers" className="menu nav-link" onClick={() => setActiveLink('link3')}
                            id={location.pathname === '/dataUsers' ? 'active' : ''}>Data Users</Link>
                        <Link to="/order" className="menu nav-link" onClick={() => setActiveLink('link4')}
                            id={location.pathname === '/order' ? 'active' : ''}>Order</Link>
                    </Nav>
                    <Nav className="you-auto text-center">
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