import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from '../component/Navbar'
import Swal from 'sweetalert2'
import Sidebar from '../component/Sidebar'
import { Button, InputGroup, Modal, Form } from 'react-bootstrap';

export default function Makanan() {
  const [show, setShow] = useState(false);
    const [ makanans , setMakanan ] = useState([]);
    const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState("");
  const [harga, setHarga] = useState("");
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // Get
    const getAllMakanan = async () => {
        await axios
      .get("http://localhost:8000/Makanans")
      .then((response) => {
        setMakanan(response.data);
      })
      .catch((error) => {
        console.log("Terjadi Kesalahan " + error);
      });
    }

    // Add 
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
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
      window.location.reload();
    };

    // Delete
    const deleteMakanan = async (id) => {
      Swal.fire({
          title: 'Apakah Yakin Ingin Delete?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Tetap Delete!'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete("http://localhost:8000/Makanans/" + id)
            Swal.fire(
              'Berhasil Men Delete!',
              'File Anda Telah Di Delete',
              'success'
              )
            }
            window.location.reload();
          })
        };
    useEffect(() => {
      getAllMakanan();
    }, []);
  return (
   <div>
    <Navbar />
    {localStorage.getItem("id") !== null ? 
    <button className="btn danger" onClick={handleShow}>
                Add
    </button>
    : <></> }
    <div
        style={{ padding: 20, display: "flex", gap: 50 }}
        className="flex-wrap"
      >
        {makanans.map((food) => (
          <div
            class="card"
            style={{
              width: "16rem",
              backgroundColor: "palegoldenrod",
              padding: 3,
            }}
          >
            <img
              style={{ width: 250, height: 200 }}
              src={food.image}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">{food.nama}</h5>
              <p class="card-text">{food.deskripsi}</p>
              <h6>Rp.{food.harga}</h6>
              {localStorage.getItem("id") !== null ? (
                <>
                 <Button
                    variant="danger"
                    className="mx-1"
                    onClick={() => deleteMakanan(food.id)}
                  >
                    Hapus
                  </Button>
                  <a href={"/edit/" + food.id}>
                    <Button variant="success" className="mx-1">
                      Edit
                    </Button>
                    </a>
                </>  
                ) : (
               <a href="/login"  class="btn btn-danger">
                Login
               </a>
              )}
            </div>
          </div>
        ))}
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
   </div>
  )
}
