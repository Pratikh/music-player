import { connect } from "react-redux";
import { getCLickedItem, getLoadedFiles } from '../redux/selector';
import audioPlayer from './audioPlayer';
import updateAnimation from '../components/ProgressBar.js';

export async function playAudios(audioFilesList) {
    for (let index = 0; index < audioFilesList.length; index++) {
        const file = audioFilesList[index];
        await play(file);
    }
};

export function play(audioFile) {
    const isAudioAlreadyPresent = audioPlayer.audioObjectByIndex[audioFile.index];
    if (audioPlayer.currentAudio) {
        audioPlayer.currentAudio.pause();
    }
    if (isAudioAlreadyPresent) {
        audioPlayer.currentAudioId = isAudioAlreadyPresent.play();
        // updateAnimation();
        return;
    }
    return new Promise((reject, resolve) => {
        audioPlayer.play(audioFile, resolve, reject);
        updateAnimation();
        // console.log(id);
    }).catch(error => {
        console.log('Got error', error);
    });
}

function getAudioRealtedData(props) {
    console.log(props);
    if (props.currentClickedItem) {
        const index = props.currentClickedItem - 1;
        const src = props.getLoadedFiles[index];
        const playData = {
            src,
            index,
        }
        play(playData)
    }
    return (<></>);
}

const mapStateToProps = function (state) {
    return {
        currentClickedItem: getCLickedItem(state),
        getLoadedFiles: getLoadedFiles(state),
    }

}

export default connect(mapStateToProps)(getAudioRealtedData);