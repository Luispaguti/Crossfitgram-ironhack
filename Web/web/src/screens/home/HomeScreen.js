
import React from 'react'
import { NavBar, WoodList } from '../../components/ui'
import  Section from '../../components/ui/section/Section'
import  StreamList from '../../components/ui/streams/stream-list/StreamList'


function HomeScreen() {
  return (
    <>
      {/* <Section/> */}
      
      <WoodList/>
      <StreamList/>
    </>
  )
}

export default HomeScreen