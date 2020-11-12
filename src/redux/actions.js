import {
    ADD_FILES, DELETE_FILES, CLICKED, LOADED_FILES, PLAY_PAUSE_BUTTON, AUDIO_PROGRESS, CURRENT_DURATION,
    REMAINING_DURATION, AUIDO_VOLUME
} from './actionTypes';

export function addFiles(content) {
    console.log(content);
    return {
        type: ADD_FILES,
        payload: {
            files: content
        }
    }
}

export function deleteFiles(content) {
    return {
        type: DELETE_FILES,
        payload: content
    }
}

export function updateClickedAudioItem(content) {
    console.log(content);
    return {
        type: CLICKED,
        payload: content
    }
}

export function loadFiles(content) {
    return {
        type: LOADED_FILES,
        payload: content
    }
}

export function playPauseButton(payload) {
    console.log('payload  payloadpayload', payload);
    return {
        type: PLAY_PAUSE_BUTTON,
        payload,
    }
}

export function audioProgress(value) {
    return {
        type: AUDIO_PROGRESS,
        value,
    }
}

export function audioCurrentDurationUpdate(currentDurartion) {
    return {
        type: CURRENT_DURATION,
        currentDurartion,
    }
}

export function audioRemainingDurationUpdate(remainingDuration) {
    return {
        type: REMAINING_DURATION,
        remainingDuration,
    }
}

export function audioVolumeUpdate(volume) {
    console.log(volume);
    return {
        type: AUIDO_VOLUME,
        volume,
    }
}