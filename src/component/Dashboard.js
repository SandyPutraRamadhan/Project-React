import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import '../style/Dashboard.css'

function Dashboard() {
  return (
    <div>
        <Navbar />
    <div className='dashboard'>
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
                   <p><a className="legend" href="/minuman">Minuman</a></p> 
                </div>
            </Carousel>
</div>

</div>
  )
}

export default Dashboard