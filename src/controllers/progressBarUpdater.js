import audioPlayer from './audioPlayer';
let copyCallback = null;

export function updateState(callBackObject) {
    if (isNaN(+callBackObject)) {
        copyCallback = callBackObject;
    }
    if (audioPlayer.currentAudio) {

        const param = copyCallback ? copyCallback : callBackObject;
        updateStateValues(param);
        if (audioPlayer.currentAudio.playing()) {
            requestAnimationFrame(updateState);
        } else {
            cancelAnimationFrame(updateState);
        }
    }
}

function updateStateValues({ audioProgress, audioCurrentDurationUpdate, audioRemainingDurationUpdate }) {
    const value = audioPlayer.currentAudio.seek() * (100 / audioPlayer.currentAudio.duration());
    audioProgress(value);

    let minut = Math.floor(audioPlayer.currentAudio.seek() / 60) ? Math.floor(audioPlayer.currentAudio.seek() / 60) : 0;
    let seconds = Math.floor(audioPlayer.currentAudio.seek() - (minut * 60)) ? Math.floor(audioPlayer.currentAudio.seek() - (minut * 60)) : 0
    const currentDurartion = {
        minut,
        seconds,
    };
    audioCurrentDurationUpdate(currentDurartion)

    minut = Math.floor(audioPlayer.currentAudio.duration() / 60);
    seconds = Math.floor(audioPlayer.currentAudio.duration() - (minut * 60))
    const remainingDuration = {
        minut,
        seconds,
    };
    audioRemainingDurationUpdate(remainingDuration)
}