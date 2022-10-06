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
            <a href="about.html">about</a>
          </li>
          <li>
            <a href="hairstyle.html">course</a>
          </li>
          <li>
            <a href="news.html">news</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}