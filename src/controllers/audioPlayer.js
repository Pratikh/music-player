import _ from 'lodash'
import { Howl } from 'howler';

class AudioPlayer {
  constructor() {
    this.hawlerInstance = [];
    this.audioPlayId = {};
    this.audioObjectByIndex = {};
    this.currentAudioId = null;
  }

  play(fileData, onAudioStart = _.noop) {
    return new Promise((resolve, reject) => {
      const sound = new Howl({
        src: fileData.src,
        format: 'mp4',
        onloaderror: () => {
          console.error('Audio file is not loaded');
          reject('Audio file is not loaded');
        },
        onplayerror: () => {
          console.error('On play error');
          reject('On play error');
        },
        onplay: () => {
          console.info('Audio started playing');
        },
        onend: () => {
          console.info('Audio playing completed');
        },
        onmute: () => {
          console.info('Muted');
        },
        onseek: () => {
          console.log('on seek');
        }
      });
      let id = null;
      sound.once('load', () => {
        id = sound.play();
        this.currentAudioId = id;
        this.audioObjectByIndex[fileData.index] = sound;
        this.audioPlayId[id] = sound;
        onAudioStart();
        resolve(id);
      });
      sound.once('end', () => { this.onAudioEnd(id) });

    })
  }

  // Once completed no need a object ref
  onAudioEnd(id) {
    console.log('Audio ended');
    // delete this.audioPlayId[id];
  }

  // should send id to stop needed audio
  stop(id) {
    this.audioPlayId[id].stop(id);
  }

  stopAll() {
    // Need to work on it.
  }

  pause(id) {
    this.audioPlayId[id].pause();
  }

  resume(id) {
    this.audioPlayId[id].play();
  }

  get currentAudio() {
    return this.audioPlayId[this.currentAudioId];
  }
}

const audioPlayer = new AudioPlayer();
export default audioPlayer;
window.audioPlayer = audioPlayer;
