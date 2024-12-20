import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const displayNav = () => {
    const navUl = document.querySelector('nav ul');
    if (navOpen) {
      navUl.style.right = '-205px';
    } else {
      navUl.style.right = '0';
    }
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
        <li><Link to='hero' smooth = {true} offset = {0} duration ={500}>Home</Link></li>
        <li><Link to = 'program' smooth = {true} offset = {-260} duration = {500}>Program</Link></li>
        <li><Link to = 'about' smooth = {true} offset = {-150} duration = {500}>About Us</Link></li>
        <li><Link to = 'campus' smooth = {true} offset = {-260} duration = {500}>Campus</Link></li>
        <li><Link to = 'testimonials' smooth = {true} offset = {-260} duration = {500}>Testimonials</Link></li>
        <li><Link to = 'contact' smooth = {true} offset = {-260} duration = {500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu_icon' onClick={displayNav}/>
    </nav>
  )
}

export default Navbar
