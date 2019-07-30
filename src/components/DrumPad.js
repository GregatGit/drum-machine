import React from 'react'


const DrumPad = ({letter = 'Q', sound}) => {

  const handleClick = () => sound()

  return (
    <div onClick={handleClick} className="item drum-pad">
      {letter}
    </div>
  )
}

export default DrumPad
