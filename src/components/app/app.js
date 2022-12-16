import React, { useState } from 'react'
import musics from '../../musics'
import AudioPlayer from '../audio-player/audio-player'
import './app.css'

const App = () => {
  const [state, setState] = useState(musics)

  const onPlay = (id) => {
    const newState = [...musics].map((elem) => {
      elem.id === id? elem.play = true : elem.play = false;
      return elem
    })
    setState([...newState])
  }

  const list = state.map((music) => {
    return <AudioPlayer {...music} state={state} key={music.id} onPlay={onPlay} />
  })

  return (
    <main className='app'>
      <ul className='list'>
        { list }
      </ul>
    </main>
  )
}

export default App
