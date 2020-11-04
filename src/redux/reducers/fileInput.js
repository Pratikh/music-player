import { ADD_FILES, DELETE_FILES } from '../actionTypes';

const initialState = {
    files: null,
}

export default function fileHandler(state = initialState, { type, payload }) {
    console.log(payload);
    switch (type) {
        case ADD_FILES:
            return {
                ...state,
                files: payload.files
            }
        case DELETE_FILES:
            return {
                ...state,
                files: null,
            }
        default:
            return state;
    }
}