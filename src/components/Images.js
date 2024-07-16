import React from "react";
import { Tabs } from "@mantine/core";
import { Navbar } from "./Navbar/Navbar";
import { Img } from 'react-image';
import img from './top_view.jpg';
import '../App.css'; 

export default function Images() {
  return (
    <div className="app-container">
      <div className="navbar">
        <Navbar id='Images'/>
      </div>
      <div className="main-content">
        <Img src={img} alt="Top View" className="main-image" />
      </div>
    </div>
    
  );
}
