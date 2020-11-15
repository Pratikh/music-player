import { AUDIO_PROGRESS, CURRENT_DURATION, REMAINING_DURATION } from '../actionTypes';

const initialState = {
    value: 0,
    currentDurartion: {
        minut: 0,
        seconds: 0
    },
    remainingDuration: {
        minut: 0,
        seconds: 0
    }
}

export default function fileHandler(state = initialState, { type, value, currentDurartion, remainingDuration }) {
    switch (type) {
        case AUDIO_PROGRESS:
            return {
                ...state,
                value
            }
        case CURRENT_DURATION:
            return {
                ...state,
                currentDurartion
            }
        case REMAINING_DURATION:
            return {
                ...state,
                remainingDuration
            }
        default:
            return state;
    }
}