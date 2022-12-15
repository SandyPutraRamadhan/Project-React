import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { InputGroup } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import { Button } from "./Button";
import "../style/Navbar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState("");
  const [harga, setHarga] = useState("");
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate()

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/login");
    window.location.reload();
  };

  window.addEventListener("resize", showButton);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#" className="navbar-logo" onClick={closeMobileMenu}>
            W.Online 
            <i class="fa-solid fa-shop"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/category"
                className="nav-links"
                onClick={closeMobileMenu}
                >
                Category
              </Link>
            </li>
          {localStorage.getItem("id") !== null ? (
            <>
            <li className="nav-item float-right">
              <a className="nav-links" onClick={logout}>
                logout
              </a>
            </li>
            </>
          ) : (
            <li className="nav-item float-right">
                <a className="nav-links " href="/login">
                  Login
                </a>
              </li>
          )}
          {/* {button && <Button buttonStyle='btn-outline' className="nav-links">SIGN IN</Button>} */}
            </ul>
        </div>
          </nav>
    </React.Fragment>
  );
}

export default Navbar;
