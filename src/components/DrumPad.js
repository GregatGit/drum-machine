import React, { useState, useEffect } from 'react'

const DrumPad = ({ letter = 'Q', url, displaySound, id }) => {
  const [playing, setPlaying] = useState('drum-pad')

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = e => {
    // only play this key
    if (letter !== e.key.toUpperCase()) return
    handleClick()
  }
  const handleClick = () => {
    setPlaying('drum-pad playing')
    displaySound()
    const theAudio = document.querySelector(`#${letter}`)
    theAudio.play()
    setTimeout(() => setPlaying('drum-pad'), 200)
  }
  return (
    <div id={id} onKeyPress={handleKeyDown} onClick={handleClick} className={playing}>
      {letter}
      <audio id={letter} className="clip" src={url} />
    </div>
  )
}

export default DrumPad
