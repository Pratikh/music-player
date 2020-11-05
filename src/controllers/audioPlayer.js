import { Howl } from 'howler';

class AudioPlayer {
  constructor() {
    this.hawlerInstance = [];
    this.audioPlayId = {};
  }

  play(url, onComplete, onError) {
    const sound = new Howl({
      src: url,
      autoplay: false,
      loop: false,
      preload: true,
      volume: 1,
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
    let id = { id: null };
    sound.once('load', () => {
      console.log('here');
      id.id = sound.play();
      this.audioPlayId[id.id] = sound;
    });
    sound.once('end', () => { this.onAudioEnd(id) });
    return id;// user need to save if he wants to stop it.
  }

  // Once completed no need aobject ref
  onAudioEnd(id) {
    console.log('IN onAudioEnd,,,,,deleting ID');
    delete this.audioPlayId[id];
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
}

 const audioPlayer = new AudioPlayer();
 export default audioPlayer;
window.audioPlayer = audioPlayer;
