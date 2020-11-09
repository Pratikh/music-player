import { ADD_FILES, DELETE_FILES, CLICKED, LOADED_FILES, PLAY_PAUSE_BUTTON } from './actionTypes';

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
    console.log('payload  payloadpayload',payload);
    return {
        type: PLAY_PAUSE_BUTTON,
        payload,
    }
}