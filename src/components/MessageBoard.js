import React from 'react'

const MessageBoard = ({message = 'WELCOME'}) => {
  return (
    <div>
      {message}
    </div>
  )
}

export default MessageBoard
