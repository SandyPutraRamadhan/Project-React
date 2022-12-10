import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from '../component/Navbar'
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap';

export default function Makanan() {
    const [ makanans , setMakanan ] = useState([]);
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
            window.location.reload();
          }
        })
    };
    useEffect(() => {
      getAllMakanan();
    }, []);
  return (
   <div>
    <Navbar />
    <table class="table table-dark table-hover">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Nama</th>
      <th scope="col">Deskripsi</th>
      <th scope="col">Image</th>
      <th scope="col">Harga</th>
      {localStorage.getItem("id") !== null ? <th>Action</th> : <></>}
    </tr>
  </thead>
  <tbody>
  {makanans.map((food, index) => {
            return (
              <tr key={food.id}>
                <td>{index + 1}</td>
                <td>{food.nama}</td>
                <td>{food.deskripsi}</td>
                <td><img src={food.image} alt="" width={100} height={100} /></td>
                <td>{food.harga}</td>
                {localStorage.getItem("id") !== null ? (
                <td>
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
                </td>
                  ) : <></>}
              </tr>
            );
          })}
  </tbody>
</table>
   </div>
  )
}
