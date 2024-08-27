import React, { useContext } from 'react'
import Display from './components/Display'
import Player from './components/Player'
import Sibebar from './components/Sibebar'
import { PlayContext } from './context/PlayContext'

const App = () => {


const {audioRef, track} =useContext(PlayContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
    <Sibebar />
    <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div> 
  )
}

export default App