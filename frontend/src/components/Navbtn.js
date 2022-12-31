import React from "react";
import { Link } from "react-router-dom";

export default function Navbtn(props) {
  return (
    <div className=" text-xl hover:bg-blue-500 bg-blue-400 rounded-xl m-1">
        <Link to={props.to}>{props.name}</Link>
        </div>
  )
}
