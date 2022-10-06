import React from 'react'
import { NavLink } from "react-router-dom";
type Props = {}

export default function Header({}: Props) {
  return (
    <div id="header">
      <div className="section">
        <div className="logo">
          <NavLink to={"/"}>e-learning</NavLink>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>home</NavLink>
          </li>
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">register</a>
          </li>
          <li>
            <a href="#">category</a>
          </li>
          <li>
            <a href="#">profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
}