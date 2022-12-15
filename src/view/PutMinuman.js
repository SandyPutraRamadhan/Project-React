import axios from "axios";
// Fungsi useState akan mereturn pasangan nilai dari state dan fungsi untuk mengubah state tersebut dalam bentuk sebuah array
import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Edit() {
  // param digunakan dalam React routing, di mana kita memiliki parameter yang perlu kita akses di route
  const param = useParams();
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [image, setImage] = useState("");
  const [harga, setHarga] = useState("");

  const navigate = useNavigate();

  // React hooks useEffect digunakan untuk menambahkan side effect ke function komponen
  useEffect(() => {
    axios
      .get("http://localhost:8000/Minuman/" + param.id)
      .then((response) => {
        const newBook = response.data;
        setNama(newBook.nama);
        setDeskripsi(newBook.deskripsi);
        setImage(newBook.image);
        setHarga(newBook.harga);
      })
      .catch((error) => {
        alert("Terjadi Kesalahan Sir! " + error);
      });
  },[]);

  // Mengganti data lama menjadi data yang baru
  const submitActionHandler = async (e) => {
    e.preventDefault();

     await 
      Swal.fire({
        title: 'apakah yakin di edit datanya?',
        showCancelButton: true,
        confirmButtonText: 'Edit',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
          .put("http://localhost:8000/Minuman/" + param.id, {
            nama: nama,
            deskripsi: deskripsi,
            Image: image,
            harga: harga,
          })
        }
      })
      .then(() => {
        navigate.push("/minuman");
        Swal.fire('Berhasil Mengedit!', '', 'success')
        window.location.reload();
      })
  };
  return (
    <div className="edit mx-5">
        <div className="container my-5">
      <Form onSubmit={submitActionHandler}>
          <div className="mb-3">
            <Form.Label>
              <strong>nama</strong>
            </Form.Label>
            <InputGroup className="d-flex gab-3">
              <Form.Control
                placeholder="Masukkan nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </InputGroup>
          </div>

          <div className="place-of-birth mb-3">
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

          <div className="place-of-birth mb-3">
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
        <div className="d-flex justify-content-end align-items-center mt-2">
          <button className="buton btn" type="submit">
            Save
          </button>
        </div>
      </Form>
        </div>
    </div>
  );
}
