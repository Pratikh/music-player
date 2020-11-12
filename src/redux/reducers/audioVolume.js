import { AUIDO_VOLUME } from '../actionTypes';

const initalState = {
    volume: 50,
}

export default function audioVolume(state = initalState, { type, volume }) {
    switch (type) {
        case AUIDO_VOLUME:
            return {
                ...state,
                volume,
            }
        default:
            return state;
    }

}