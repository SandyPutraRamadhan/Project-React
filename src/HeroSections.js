import React from 'react';
import './App.css';
import { Button } from './component/Button';
import { Link } from 'react-router-dom';
import './style/HeroSections copy.css';
import vidioBg from './videos/video-2.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vidioBg} autoPlay loop muted />
      <h1>Warung Online</h1>
      <p>Selamat Datang Di Website Warung Online</p>
      <div className='hero-btns'>
       <Link to="/login" className='btns'>
       Login
       </Link>||
       <Link to="/register" className='btns'>
       Register
       </Link>
      </div>
    </div>
  );
}

export default HeroSection;
