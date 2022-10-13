
import React from 'react'
import { WoodList } from '../../components/ui'
import  Section from '../../components/ui/section/Section'
import  StreamList from '../../components/ui/streams/stream-list/StreamList'


function HomeScreen() {
  return (
    <>
    <h1>home</h1>
      {/* <Section/> */}
      <WoodList/>
      <StreamList/>
      
    </>
  )
}

export default HomeScreen