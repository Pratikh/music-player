import { PLAY_PAUSE_BUTTON } from '../actionTypes'

const initialState = {
    toggle: false,
}

export default function togglePlayPauseButton(state = initialState, { type, payload }) {
    switch (type) {
        case PLAY_PAUSE_BUTTON:
            return {
                ...state,
                toggle: payload
            }
        default:
            return state;
    }
}