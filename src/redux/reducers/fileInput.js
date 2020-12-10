import { ADD_FILES, DELETE_FILES } from '../actionTypes';

const initialState = {
    files: [],
    isFilesLoaded: false,
}

export default function fileHandler(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FILES:
            return {
                ...state,
                isFilesLoaded:payload.isFilesLoaded,
                files: [
                    ...state.files,
                    ...payload.files
                ]
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