import React from "react";
import { Link } from "react-router-dom";
import Navitems from "./Navitems";
// import Navbtn from './Navbtn'
export default function Navbar() {
  return (
    <header className=" bg-secondary1 flex justify-around">
      <h1 className="  font-mono flex  p-5 w-1/3 text-accent lg:text-5xl md:text-4xl sm:text-3xl">
        <Link to="/">website name</Link>
      </h1>
      <nav className=" flex items-center justify-around p-4 w-2/3">
        <Navitems to='/' name='home'/>
        <Navitems to='/About' name='About'/>
        <Navitems to='/Projects' name='Projects'/>
        <Navitems to='/Contact' name='Contact'/>
      </nav>
    </header>
  );
}
