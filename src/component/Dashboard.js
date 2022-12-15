import axios from "axios";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import "../style/Dashboard.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Button } from "bootstrap";


function Dashboard({addToCart}) {
  const [makanans, setMakanans] = useState([]);
  const [ minuman , setMinumans ] = useState([]);

  // Get makanan
  const getAllMakanan = async () => {
    await axios
      .get("http://localhost:8000/Makanans")
      .then((response) => {
        setMakanans(response.data);
      })
      .catch((error) => {
        console.log("Terjadi Kesalahan " + error);
      });
  };
  // Get minuman
  const getAllMinuman = async () => {
    await axios
  .get("http://localhost:8000/Minuman")
  .then((response) => {
    setMinumans(response.data);
  })
  .catch((error) => {
    console.log("Terjadi Kesalahan " + error);
  });
}
const beli = async (makanans) => {
  await axios.post("http://localhost:8000/CART", makanans);
  console.log(makanans);
}
const beliMinuman = async (minuman) => {
  await axios.post("http://localhost:8000/CART", minuman);
  console.log(minuman);
}
  useEffect(() => {
    getAllMakanan();
    getAllMinuman();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <Sidebar />
        <Carousel>
          <div>
            <img src="https://ik.imagekit.io/carro/jualo/original/23879327/blibli-promo-snack-ma-kupon-makanan-dan-minuman-23879327.jpg?v=1583983893" />
            <p className="legend">Snack</p>
          </div>
          <div>
            <img src="https://cdn-2.tstatic.net/pontianak/foto/bank/images/promo-makanan-hari-ini-12-juli-2021.jpg" />
            <p className="legend">Makanan</p>
          </div>
          <div>
            <img src="https://cdn-2.tstatic.net/tribunnews/foto/bank/images/promo-minuman-oktober.jpg" />
            <p>
              <a className="legend" href="/minuman">
                Minuman
              </a>
            </p>
          </div>
        </Carousel>
      </div>
      <h1>Makanan</h1>
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
                <button onClick={() => beli(food)} className="btn btn-primary">Buy</button>
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
      <h1>Minuman</h1>
      <div
        style={{ padding: 20, display: "flex", gap: 50 }}
        className="flex-wrap"
      >
        {minuman.map((drink) => (
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
              src={drink.image}
              class="card-img-top"
              alt="..."
            />
            <div class="card-body" style={{ textAlign: "center" }}>
              <h5 class="card-title">{drink.nama}</h5>
              <p class="card-text">{drink.deskripsi}</p>
              <h6>Rp.{drink.harga}</h6>
              {localStorage.getItem("id") !== null ? (
               <>
               <button onClick={() => beliMinuman(drink)} className="btn btn-primary">Buy</button>      
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
      <Footer />
    </div>
  );
}

export default Dashboard;
