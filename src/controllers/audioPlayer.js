import { Howl } from 'howler';

class AudioPlayer {
  constructor() {
    this.hawlerInstance = [];
    this.audioPlayId = {};
    this.audioObjectByIndex = {};
    this.currentAudioId = null;
  }

  play(fileData, onComplete, onError) {
    console.log('In play method');
    const sound = new Howl({
      src: fileData.src,
      format: 'mp4',
      onloaderror: () => {
        console.error('Audio file is not loaded');
        onError();
      },
      onplayerror: () => {
        console.error('On play error');
        onError();
      },
      onplay: () => {
        console.info('Audio started playing');
      },
      onend: () => {
        console.info('Audio playing completed');
        onComplete();
      },
      onmute: () => {
        console.info('Muted');
      }
    });
    let id = null;
    sound.once('load', () => {
      console.log('here');
      id = sound.play();
      this.currentAudioId = id;
      this.audioObjectByIndex[fileData.index] = sound;
      this.audioPlayId[id] = sound;
    });
    sound.once('end', () => { this.onAudioEnd(id) });
    return id;// user need to save if he wants to stop it.
  }

  // Once completed no need aobject ref
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

  get currentAudio(){
    return this.audioPlayId[this.currentAudioId];
  }
}

 const audioPlayer = new AudioPlayer();
 export default audioPlayer;
window.audioPlayer = audioPlayer;
