import React, { Component } from 'react'
import { soundsA, soundsB, keys } from '../sounds'
import DrumPad from './DrumPad'
import MessageBoard from './MessageBoard'
import './drumPadStyles.css'

class DrumPads extends Component {
  state = {message: undefined, sounds: soundsA, soundIndex: 'A'}

  playSound = index => {
    this.setState({message: this.state.sounds[index].name.toUpperCase()})
    const theSound = new Audio(this.state.sounds[index].url)
    theSound.play()
  }

  makeDrumPads = () => {
    return keys.map((item, index) => {
      return (
        <DrumPad key={index} letter={item} sound={() => this.playSound(item)} />
      )
    })
  }
  changeSounds = () =>{
    if (this.state.soundIndex === 'A'){
      this.setState({sounds: soundsB, soundIndex: 'B'})
    } else {
      this.setState({sounds: soundsA, soundIndex: 'A'})
    }
  }

  render() {
    return (
      <div id="display" >
      <button onClick={this.changeSounds}>CHANGE SOUNDS</button>
      <MessageBoard message={this.state.message} />
        <div className="container">
        {this.makeDrumPads()}
        </div>
      </div>
    )
  }
}

export default DrumPads
