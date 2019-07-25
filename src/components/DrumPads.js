import React, { Component } from 'react'
import { sounds } from '../sounds'
import DrumPad from './DrumPad'
import { keys, upperAndLower } from '../data'

class DrumPads extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown")
  }

  handleKeyPress = e => {
    
    let letter = e.key
    // only continue if it key of drum-pad
    if (upperAndLower.indexOf(letter) === -1){
      return
    }
    letter = letter.toUpperCase()
    console.log(letter)
    this.playSound(letter)
  }

  playSound = index => {
    const theSound = new Audio(sounds[index].url)
    theSound.play()
  }
  

  makeDrumPads = () => {
    return keys.map((item, index) => {
      return <DrumPad key={index} letter={item} sound={() => this.playSound(item)} />
    })
  }

  render() {
    return <div >{this.makeDrumPads()}</div>
  }
}

export default DrumPads


