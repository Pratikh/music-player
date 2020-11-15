import { CLICKED, LOADED_FILES, CLICKED_AUDIO_NAME } from '../actionTypes';

const initialState = {
    currectClicked: null,
    loadedFile: null,
    clickedAudioName: 'click on list',
}

export default function currectClicked(state = initialState, { type, payload }) {
    switch (type) {
        case CLICKED:
            return {
                ...state,
                currectClicked: payload
            }
        case LOADED_FILES:
            return {
                ...state,
                loadedFile: payload
            }
        case CLICKED_AUDIO_NAME:
            return {
                ...state,
                clickedAudioName: payload
            }
        default:
            return state;
    }
}