import { CLICKED, LOADED_FILES } from '../actionTypes';

const initialState = {
    currectClicked: null,
    loadedFile: null,
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
        default:
            return state;
    }
}