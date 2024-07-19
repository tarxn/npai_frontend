import React from "react";
import { Stepper, Tabs } from "@mantine/core";
import { Navbar } from "./Navbar/Navbar";
import { Img } from 'react-image';
import '../App.css'; 
import './Navbar/Navbar.module.css';
import TopBar from "./Navbar/TopBar";

export default function Home() {
  return (
    <div className="app-container">
     <div style={{ display: 'flex', height: '100vh' }}>
      <Navbar />
      <Stepper />
    </div>
    </div>
    
  );
}
