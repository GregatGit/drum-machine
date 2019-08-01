import React, { Component } from 'react'
import { sounds } from '../sounds'
import DrumPad from './DrumPad'
import MessageBoard from './MessageBoard'
import { keys, upperAndLower } from '../data'
import './drumPadStyles.css'

class DrumPads extends Component {
  state = {message: undefined, sounds: 'primary'}
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown')
  }

  handleKeyPress = e => {
    let letter = e.key
    // only continue if it key of drum-pad
    if (upperAndLower.indexOf(letter) === -1) return

    letter = letter.toUpperCase()
    console.log(letter)
    this.playSound(letter)
  }

  playSound = index => {
    this.setState({message: sounds[index].name.toUpperCase()})
    const theSound = new Audio(sounds[index].url)
    theSound.play()
  }

  makeDrumPads = () => {
    return keys.map((item, index) => {
      return (
        <DrumPad key={index} letter={item} sound={() => this.playSound(item)} />
      )
    })
  }

  render() {
    return (
      <div id="display" >
      <MessageBoard message={this.state.message} />
        <div className="container">
        {this.makeDrumPads()}
        </div>
      </div>
    )
  }
}

export default DrumPads
