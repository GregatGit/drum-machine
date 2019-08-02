import React, { useState, useEffect } from 'react'

const DrumPad = ({letter = 'Q', sound}) => {
  const [playing, setPlaying] = useState('drum-pad')

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown')
    };
  }, [])

  const handleKeyDown = (e) => {
    // only play this key
    if (letter !== e.key.toUpperCase()) return
    console.log(e.key)
    handleClick()
  }
  const handleClick = () => {
    setPlaying('drum-pad playing')
    sound()
    setTimeout(()=>setPlaying('drum-pad'), 200)

  }
  return (
    <div onKeyPress={handleKeyDown} onClick={handleClick} className={playing}>
      {letter}
    </div>
  )
}

export default DrumPad
