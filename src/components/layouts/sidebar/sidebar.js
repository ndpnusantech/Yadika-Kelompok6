import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center text-light">
      <div
        className="header d-flex flex-wrap justify-content-center"
        style={{
          backgroundColor: "#00528C",
          height: "220px",
          width: "100%",
          borderRadius: "0 0 25px 25px",
        }}
      >
        <div className="d-flex flex-column mt-4 d-flex align-items-center">
          <span className="profile rounded-circle p-2 mb-3 ">
            <img src="assets/Profile User/profile.png" alt="" width="100px" />
          </span>
          <h4>Fahmi Fahrizal</h4>
        </div>
      </div>

      <div className="menu d-flex flex-column flex-wrap text-center mt-4 w-100">
        <Link
          to="/dashboard"
          className={`fs-5 text-decoration-none text-white fw-semibold mb-2 ${
            window.location.pathname === "/dashboard" ? "active-link" : ""
          }`}
        >
          Dashboard
        </Link>
        <div className="submenu d-flex justify-content-center mb-2">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              style={{ backgroundColor: "transparent", border: "none" }}
              className="fw-semibold fs-5"
            >
              Obat
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/storage">Obat</Dropdown.Item>
              <Dropdown.Item href="/adminobatkategori">
                Kategori Penyakit
              </Dropdown.Item>
              <Dropdown.Item href="#coming">Kategori Obat</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Link
          to="/order"
          className={`fs-5 text-decoration-none text-white fw-semibold mb-2 ${
            window.location.pathname === "/order" ? "active-link" : ""
          }`}
        >
          Order
        </Link>
        <Link
          to="/dataUsers"
          className={`fs-5 text-decoration-none text-white fw-semibold ${
            window.location.pathname === "/dataUsers" ? "active-link" : ""
          }`}
        >
          Data Users
        </Link>
      </div>
      <div className="extramenu d-flex flex-column  position-absolute">
        <Link
          to="/dashboard"
          className="fs-5 text-decoration-none text-white fw-semibold"
        >
          Setting
        </Link>
        <Link
          to="/dashboard"
          className="fs-5 text-decoration-none text-white fw-semibold"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
