import React, { Component } from 'react'
import { soundsA, soundsB, keys } from '../sounds'
import DrumPad from './DrumPad'
import './drumPadStyles.css'

class DrumPads extends Component {
  state = { message: undefined, sounds: soundsA, soundIndex: 'A', background: 'myMachine' }

  playSound = index => {
    this.setState({ message: this.state.sounds[index].name.toUpperCase() })
    const theSound = new Audio(this.state.sounds[index].url)
    theSound.play()
  }

  makeDrumPads = () => {
    return keys.map((item, index) => {
      return (
        <DrumPad id={item} key={index} letter={item} url={this.state.sounds[item].url} sound={() => this.playSound(item)} />
      )
    })
  }
  changeSounds = () => {
    if (this.state.soundIndex === 'A') {
      this.setState({ sounds: soundsB, soundIndex: 'B', background: 'myCat' })
    } else {
      this.setState({ sounds: soundsA, soundIndex: 'A', background: 'myMachine' })
    }
  }

  

  render() {
    return (
      <div id="display" className={this.state.background}>
        <h2>DRUM MACHINE</h2>

        <div className="container">
          <button className="top" onClick={this.changeSounds}>CHANGE SOUNDS</button>
          <div className="top message-board">{this.state.message}</div>
          <div className="top">Sounds: {(this.state.soundIndex === 'A') ? 'Drums' : 'Cats and Lasers'}</div>
          {this.makeDrumPads()}
        </div>
      </div>
    )
  }
}

export default DrumPads
