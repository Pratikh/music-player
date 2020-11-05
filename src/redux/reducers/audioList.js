import { CLICKED } from '../actionTypes';

const initialState = {
    currectClicked: null,
}

export default function currectClicked(state = initialState, { type, payload }) {
    console.log(payload);
    switch (type) {
        case CLICKED:
            return {
                ...state,
                currectClicked: payload
            }
        default:
            return state;
    }
}