import React from 'react';
import Navbar from './Navbar';
import '../style/Category.css';
import CardItem from './CardItem';

function Category() {
  return (
    <div>
    <Navbar />
    <div className='cards'>
      <h1>Silahkan Pilih Menu</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://cdn0-production-images-kly.akamaized.net/ZEI9BQ-QGhO1IwY9qWFP8Mm35hE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3126596/original/024930300_1589347291-masakan-indonesia-featured-212892.jpg'
              text='Kami Menyediakan Aneka Makanan Klik Untuk melihat menu makanan kami'
              label='Makanan'
              path='/makanan'
            />
            <CardItem
              src='https://glicowings.co.id/uploads/offline_activity/5-resep-minuman-dengan-es-krim-ala-kafe-hits-yang-nikmat-dan-segar/ecad8583c5c4992da3b0c7ef9921860c.jpg'
              text='Minuman'
              label='Minuman'
              path='/minuman'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://gamebrott.com/wp-content/uploads/2020/07/Diesel_blog_account-security-at-epic-games_EGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg'
              text='Games'
              label='Games'
              path='/games'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Category;
