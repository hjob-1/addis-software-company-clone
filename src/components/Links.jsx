import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Links({ toggle }) {
  return (
    <ul className='nav-link-lists' onClick={() => toggle(false)}>
      <li className='link'>
        <Link to='/portfolios'> Projects</Link>
      </li>
      <li className='link'>
        <Link to='/about'> About</Link>
      </li>
      <li className='link'>
        <Link to='/careers'> Careers</Link>
      </li>
      <li className='link'>
        <Link to='/courses'>Courses</Link>
      </li>
      <li className='link'>
        <Link to='/blog'>Blogs</Link>
      </li>
      <li className='link contact-btn'>
        <Link to='/contact-us'>Contact us</Link>
      </li>
    </ul>
  );
}

export default Links;
