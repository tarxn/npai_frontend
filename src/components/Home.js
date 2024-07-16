import React from "react";
import { Tabs } from "@mantine/core";
import { Navbar } from "./Navbar/Navbar";
import { Img } from 'react-image';
import '../App.css'; 

export default function Home() {
  return (
    <div className="app-container">
      <div className="navbar">
        <Navbar id=''/>
      </div>
      <div className="main-content d-flex">
       Welcome!!!
      </div>
    </div>
    
  );
}
