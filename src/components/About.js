import React from "react";
import { Tabs } from "@mantine/core";
import { Navbar } from "./Navbar/Navbar";
import { Img } from 'react-image';
import '../App.css'; 

export default function Home() {
  return (
    <div className="app-container">
      <div className="navbar">
        <Navbar id='About'/>
      </div>
      <div className="main-content d-flex">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
    </div>
    
  );
}
