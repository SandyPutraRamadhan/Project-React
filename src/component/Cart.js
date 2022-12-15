import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2';
import axios from 'axios';
import { Button } from 'bootstrap';
function Cart() {
  const [ makanans , setMakanan ] = useState([]);
  const [ minuman , setMinuman ] = useState([]);
     // Get
     const getAllMakanan = async () => {
      await axios
    .get("http://localhost:8000/CART")
    .then((response) => {
      setMakanan(response.data);
    })
    .catch((error) => {
      console.log("Terjadi Kesalahan " + error);
    });
  }
     // Get
     const getAllMinuman = async () => {
      await axios
    .get("http://localhost:8000/CART")
    .then((response) => {
      setMinuman(response.data);
    })
    .catch((error) => {
      console.log("Terjadi Kesalahan " + error);
    });
  }
  // Delete
  const deleteCart = async (id) => {
    Swal.fire({
        title: 'Apakah Yakin Ingin Delete?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Tetap Delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete("http://localhost:8000/CART/" + id)
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
    getAllMinuman();
  }, []);
  return (
   <div>
    <table className='table table-striped table-hover'>
        <thead>
          <th>No</th>
          <th>Nama</th>
          <th>Deskrpsi</th>
          <th>Image</th>
          <th>Harga</th>
          <th>Action</th>
        </thead>
        <tbody >
          {makanans.map((food, index) => {
            return (
              <tr key={food.id}>
                <td>{index + 1}</td>
                <td>{food.nama}</td>
                <td>{food.deskripsi}</td>
                <td>{food.image}</td>
                <td>{food.harga}</td>
                <td>
                  <button
                    variant="danger"
                    className="mx-1"
                    onClick={() => deleteCart(food.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tbody >
          {minuman.map((drink, index) => {
            return (
              <tr key={drink.id}>
                <td>{index + 1}</td>
                <td>{drink.nama}</td>
                <td>{drink.deskripsi}</td>
                <td>{drink.image}</td>
                <td>{drink.harga}</td>
                <td>
                  <button
                    variant="danger"
                    className="mx-1"
                    onClick={() => deleteCart(drink.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
   </div>
  )
}

export default Cart
