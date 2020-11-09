import { combineReducers } from "redux";
import fileInput from './fileInput';
import audioList from './audioList';
import togglePlayPauseButton from './audioButtons'

export default combineReducers({ fileInput, audioList, audioButton: togglePlayPauseButton });