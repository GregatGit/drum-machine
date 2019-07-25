import React from 'react'
import './drumPadStyles.css'

const DrumPad = ({letter = 'Q', sound}) => {

  const handleClick = () => sound()

  return (
    <div onClick={handleClick} className="drum-pad">
      {letter}
    </div>
  )
}

export default DrumPad
