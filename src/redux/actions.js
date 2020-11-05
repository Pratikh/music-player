import { ADD_FILES, DELETE_FILES,CLICKED } from './actionTypes';

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
        payload: content
    }
}

export function updateClickedAudioItem(content){
    console.log(content);
    return {
        type:CLICKED,
        payload:content
    }
}