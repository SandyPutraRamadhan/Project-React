import React from 'react';
import './App.css';
import { Button } from './component/Button';
import { Link } from 'react-router-dom';
import './style/HeroSections.css';
import vidioBg from './videos/video-2.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={vidioBg} autoPlay loop muted />
      <h1>Warung Online Dark Web</h1>
      <p>Selamat Datang Di Website Warung Online</p>
      <div className='hero-btns'>
       <a href='/login' className='btns'>
       <span><i class="fa-solid fa-right-to-bracket"></i> Login</span>
       </a>
       <Link to="/register" className='btnsReg'>
       Register
       </Link>
      </div>
    </div>
  );
}

export default HeroSection;
