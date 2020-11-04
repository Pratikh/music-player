import { ADD_FILES, DELETE_FILES } from './actionTypes';

export function addFiles(content) {
    console.log(content);
    return {
        type: ADD_FILES,
        payload: {
            files:content
        }
    }
}

export function deleteFiles(content) {
    return {
        type: DELETE_FILES,
        payload: {
            ...content
        }
    }
}