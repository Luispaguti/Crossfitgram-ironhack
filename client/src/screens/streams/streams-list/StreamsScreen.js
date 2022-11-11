import React from 'react'
import { StreamList } from '../../../components/ui'
import Nav from 'react-bootstrap/Nav';
import Navbar from '../../../components/ui/navbar/Navbar';

function streamsScreen() {
  return (
    <>
      <>
    {/* <Navbar/> */}
    
     <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href={"/"}>Woods</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={"/streams"}>Pics</Nav.Link>
      </Nav.Item>
    </Nav>
  
      <StreamList/>
      </>
    </>
  )
}

export default streamsScreen