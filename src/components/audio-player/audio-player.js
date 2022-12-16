import React, { useRef } from 'react' 

const AudioPlayer = ({
  author,
  title,
  mp3, 
  play,
  onPlay,
  id
}) => {
  const ref = useRef(null);

  const onPaused = () => {
    ref?.current?.pause()
  }

  if(!play) {
    onPaused()
  }

  return (
    <div className='audio-player'>
      <h5 className='audio-player__title'>{ title }</h5>
      <p className='audio-player__author'>{ author }</p>
      <audio
        onPlay={() => onPlay(id)}
        controls
        ref={ref}
        src={mp3}>
          <a href={mp3}>
              Download audio
          </a>
      </audio>
    </div>
  )
} 

export default AudioPlayer