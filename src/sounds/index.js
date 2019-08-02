import boom from './boom.wav'
import clap from './clap.wav'
import hihat from './hihat.wav'
import kick from './kick.wav'
import openhat from './openhat.wav'
import ride from './ride.wav'
import snare from './snare.wav'
import tink from './tink.wav'
import tom from './tom.wav'
import hiss from './hiss.wav'
import laser1 from './laser.wav'
import laser2 from './laserShot.wav'
import laser3 from './fullLaser.wav'
import glass from './glassBreak.wav'
import theme from './endTheme.wav'
import record from './record.wav'
import meowAngry from './meowAngry.wav'
import ray from './ray.wav'

export const soundsA = {
  Q: { id: 'Q', key: 81, name: `boom`, url: boom },
  W: { id: 'W', key: 87, name: `clap`, url: clap },
  E: { id: 'E', key: 69, name: `hi-hat`, url: hihat },
  A: { id: 'A', key: 65, name: `kick`, url: kick },
  S: { id: 'S', key: 83, name: `open-hat`, url: openhat },
  D: { id: 'D', key: 68, name: `ride`, url: ride },
  Z: { id: 'Z', key: 90, name: `snare`, url: snare },
  X: { id: 'X', key: 88, name: `tink`, url: tink },
  C: { id: 'C', key: 67, name: `tom`, url: tom },
}

export const soundsB = {
  Q: { id: 'Q', key: 81, name: `laser-1`, url: laser1 },
  W: { id: 'W', key: 87, name: `laser-2`, url: laser2 },
  E: { id: 'E', key: 69, name: `laser-3`, url: laser3 },
  A: { id: 'A', key: 65, name: `hiss`, url: hiss },
  S: { id: 'S', key: 83, name: `angry cat`, url: meowAngry },
  D: { id: 'D', key: 68, name: `glass`, url: glass },
  Z: { id: 'Z', key: 90, name: `record`, url: record },
  X: { id: 'X', key: 88, name: `ray`, url: ray },
  C: { id: 'C', key: 67, name: `theme`, url: theme },
}
