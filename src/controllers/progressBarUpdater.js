import audioPlayer from './audioPlayer';
import eventEmitter from './eventEmitter';

export function updateState() {
    if (audioPlayer.currentAudio) {
        UpdateStateValues();
        if (audioPlayer.currentAudio.playing()) {
            requestAnimationFrame(updateState);
        } else {
            cancelAnimationFrame(updateState);
        }
    }
}

function UpdateStateValues() {
    const value = audioPlayer.currentAudio.seek() * (100 / audioPlayer.currentAudio.duration());
    eventEmitter.emit('updateprogress', value);

    let minut = Math.floor(audioPlayer.currentAudio.seek() / 60) ? Math.floor(audioPlayer.currentAudio.seek() / 60) : 0;
    let seconds = Math.floor(audioPlayer.currentAudio.seek() - (minut * 60)) ? Math.floor(audioPlayer.currentAudio.seek() - (minut * 60)) : 0
    const currentDurartion = {
        minut,
        seconds,
    };
    eventEmitter.emit('audiocurrentduration', currentDurartion);

    minut = Math.floor(audioPlayer.currentAudio.duration() / 60);
    seconds = Math.floor(audioPlayer.currentAudio.duration() - (minut * 60))
    const remainingDuration = {
        minut,
        seconds,
    };
    eventEmitter.emit('audioremainingduration', remainingDuration);
}