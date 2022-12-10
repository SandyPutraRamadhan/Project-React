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

  const addMakanan = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan",
      });
      await axios.post("http://localhost:8000/Makanans", {
        nama: nama,
        deskripsi: deskripsi,
        image: image,
        harga: harga,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  // Add Minuman
  const addMinuman = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        icon: "success",
        title: "Berhasil Menambahkan",
      });
      await axios.post("http://localhost:8000/Minuman", {
        nama: nama,
        deskripsi: deskripsi,
        image: image,
        harga: harga,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

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
    window.location.reload();
    navigate("/login");
  };

  window.addEventListener("resize", showButton);

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="#" className="navbar-logo" onClick={closeMobileMenu}>
            W.Online
            <i class="fab fa-typo3" />
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
          </ul>
          {localStorage.getItem("role") === "admin" && (
            <li className="nav-item">
              <button className="nav-links" onClick={handleShow}>
                Add
              </button>
            </li>
          )}
          {localStorage.getItem("id") !== null ? (
            <>
              <li className="nav-item float-right">
                <a className="nav-links" href="/login">
                  Login
                </a>
              </li>
            </>
          ) : (
            <li className="nav-item float-right">
              <a className="nav-links" onClick={logout}>
                logout
              </a>
            </li>
          )}
          {/* {button && <Button buttonStyle='btn-outline' className="nav-links">SIGN IN</Button>} */}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tambahkan Makanan</Modal.Title>
          </Modal.Header>
          <form onSubmit={addMakanan} method="POST">
            <Modal.Body>
              <div className="mb-3">
                <Form.Label>
                  <strong>Nama</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="mb-3">
                <Form.Label>
                  <strong>Deskripsi</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Deskripsi"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="mb-3">
                <Form.Label>
                  <strong>Image</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="input">
                <Form.Label>
                  <strong>Harga</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Harga"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                  />
                </InputGroup>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button type="submit" variant="primary">
                Save Changes
              </button>
            </Modal.Footer>
          </form>
        </Modal>
        {/* Modal Minuman */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tambahkan Minuman</Modal.Title>
          </Modal.Header>
          <form onSubmit={addMinuman} method="POST">
            <Modal.Body>
              <div className="mb-3">
                <Form.Label>
                  <strong>Nama</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Nama"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="mb-3">
                <Form.Label>
                  <strong>Deskripsi</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Deskripsi"
                    value={deskripsi}
                    onChange={(e) => setDeskripsi(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="mb-3">
                <Form.Label>
                  <strong>Image</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </InputGroup>
              </div>
              <div className="input">
                <Form.Label>
                  <strong>Harga</strong>
                </Form.Label>
                <InputGroup className="d-flex gab-3">
                  <Form.Control
                    placeholder="Masukkan Harga"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                  />
                </InputGroup>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <button type="submit" variant="primary">
                Save Changes
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
