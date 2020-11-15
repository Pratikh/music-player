import {
    ADD_FILES, DELETE_FILES, CLICKED, LOADED_FILES, PLAY_PAUSE_BUTTON, AUDIO_PROGRESS, CURRENT_DURATION,
    REMAINING_DURATION, AUIDO_VOLUME, CLICKED_AUDIO_NAME
} from './actionTypes';

export function addFiles(content) {
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
    return {
        type: AUIDO_VOLUME,
        volume,
    }
}

export function currentClickedAudioName(payload) {
    return {
        type: CLICKED_AUDIO_NAME,
        payload,
    }
}