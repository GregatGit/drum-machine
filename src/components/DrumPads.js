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
        

        <div className="container">
          <div></div>
          <div><h1>DRUM MACHINE</h1></div>
          <div></div>
          <div>
          <button className="top myBtn" onClick={this.changeSounds}><h2>CHANGE SOUNDS</h2></button>
          </div>
          <div className="top message-board"><h2>{this.state.message}</h2></div>
          <div className="top"><h2>{(this.state.soundIndex === 'A') ? 'Drums' : 'Cats and Lasers'}</h2></div>
          {this.makeDrumPads()}
        </div>
      </div>
    )
  }
}

export default DrumPads
