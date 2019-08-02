import React from 'react'

const MessageBoard = ({ message = 'WELCOME' }) => (
  <div className="message-board">{message}</div>
)

export default MessageBoard
