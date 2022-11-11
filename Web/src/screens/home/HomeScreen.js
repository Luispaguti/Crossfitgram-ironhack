
import { NavBar, WoodList } from '../../components/ui'
import Section from '../../components/ui/section/Section'
import StreamList from '../../components/ui/streams/stream-list/StreamList'
import Nav from 'react-bootstrap/Nav';
import Navbar from '../../components/ui/navbar/Navbar';
import { Link, NavLink, useParams } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';
import React, { useState, useEffect } from 'react';
import * as streamService from '../../services/crossfit-service';
import '../home/HomeScreen.css'


function HomeScreen() {
  const value = useContext(AuthContext);
  const [streams, setStreams] = useState([]); // 
  const{ id }= useParams()

  useEffect(() => {
    streamService.getStreams()
      .then(streams => setStreams(streams))
      .catch(error => console.error(error));
  }, [])



  return (
    
    <body className='homebody' >
      <div className='historybody'>
        <div id="stories-wrapper">
          <div id="stories-container">


          <NavLink to={`create-stream`}>
          <img className="mistory" src={value.user.image} />
          </NavLink>
          
        
          
          
            {streams.slice(0).reverse().map(stream =>
              <button className='story' >
                <div className="profilestory">

              

                <NavLink to={`/stream/${stream.id}`} className={({ isActive }) => isActive ? "img active" : 'img'}>
                
                <img src={stream.image} />
                </NavLink>

                  

                  <div className='titlestory'>
                    <p>{stream.author.name}</p>
                  </div>

                </div>

              </button>
            )}

          </div>
        </div>
      </div>


      <div className='homescreen'>

        <WoodList />

      </div>
    </body>
  )
}

export default HomeScreen