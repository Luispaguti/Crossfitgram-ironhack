
import React from 'react'
import { NavBar, WoodList } from '../../components/ui'
import  Section from '../../components/ui/section/Section'
import  StreamList from '../../components/ui/streams/stream-list/StreamList'
import Nav from 'react-bootstrap/Nav';
import Navbar from '../../components/ui/navbar/Navbar';
import { Link, NavLink } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';


function HomeScreen() {

  // const value =useContext(AuthContext);

  return (
    <>
     {/* {value.user && !value.user && <Navbar />}  */}



    
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Woods</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/streams">Pics</Nav.Link>
      </Nav.Item>
    </Nav>
  
      <WoodList/>
    </>
  )
}

export default HomeScreen