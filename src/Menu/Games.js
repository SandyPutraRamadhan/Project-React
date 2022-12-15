import React from "react";
import Navbar from "../component/Navbar";

export default function Games() {
  return (
    <div>
      <Navbar />
      <div>
        <div class="card-group">
          <div class="card">
            <img src="https://zty.pe/media/ztype-card.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Z - Type</h5>
              <p class="card-text">
              Anda harus mengetik cepat untuk menang setiap kali dalam game ZType / Z Type ini. Di level mudah, Anda harus mencetak minimal 26 kata per menit untuk menang. Di tingkat menengah, minimal 46 kata per menit diperlukan. Namun di level sulit, Anda membutuhkan minimal 81 kata per menit untuk menang.
              </p>
            </div>
            <div class="card-footer">
                <a class="text-muted" href="https://zty.pe/">
                <i>Go Play..</i>
                </a>
            </div>
          </div>
          <div class="card">
            <img src="http://www.google.com/logos/doodles/2021/doodle-champion-island-games-begin-6753651837108462.2-2xa.gif" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Google Doddle</h5>
              <p class="card-text">
              menyertakan lima game yang dapat Anda mainkan langsung di beranda mesin pencari , dan bahkan menampilkan editor untuk membantu Anda merancang game Anda sendiri dengan mudah dan membaginya dengan teman
              </p>
            </div>
            <div class="card-footer">          
              <a class="text-muted" href="https://www.google.com/doodles">
                <i>Go Play..</i>
              </a>
            </div>
          </div>
          <div class="card">
            <img src="https://i.pinimg.com/736x/0e/71/f7/0e71f7f5e2fff03603a0898983fc0353.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">W3 School Games</h5>
              <p class="card-text">
              W3Schools Code Game adalah game web freeware yang dibuat untuk pemula dalam pengkodean, di mana tujuan pemain adalah membantu Lynx mencapai biji pinus dengan menggunakan ikon yang berbeda
              </p>
            </div>
            <div class="card-footer">
           <a class="text-muted" href="https://www.w3schools.com/codegame/">
                <i>Go Play..</i>
           </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
