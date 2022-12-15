import React, { useState } from 'react';
import '../style/Sidebar.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/makanan",
            name:"Makanan",
            icon:<i class="fa-solid fa-bowl-food"></i>
        },
        {
            path:"/minuman",
            name:"Minuman",
            icon:<i class="fa-solid fa-wine-glass"></i>
        },
        {
            path:"/games",
            name:"Games",
            icon:<i class="fa-solid fa-gamepad"></i>
        },
        {
            path:"/cart",
            name:"Cart",
            icon:<i class="fa-solid fa-cart-shopping"></i>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;