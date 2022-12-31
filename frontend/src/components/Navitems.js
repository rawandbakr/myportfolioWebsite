import React from "react";
import { Link } from "react-router-dom";

export default function Navitems(props) {
  return (
    <button className="hover:bg-primary1 hover:text-white rounded border-primary1 border-b-2  border-r-2 shadow-xl p-1">
        <Link to={props.to}>{props.name}</Link>
        </button>
  )
}
