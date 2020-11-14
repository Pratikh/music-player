import { connect } from "react-redux";
import audioPlayer from '../controllers/audioPlayer';
import { getCLickedItem, getLoadedFiles, getCurrentAudioName } from '../redux/selector';
import { audioProgress, audioCurrentDurationUpdate, audioRemainingDurationUpdate } from '../redux/actions';
import { updateState } from '../controllers/progressBarUpdater'

async function play(audioFile) {
    const isAudioAlreadyPresent = audioPlayer.audioObjectByIndex[audioFile.index];
    if (audioPlayer.currentAudio) {
        audioPlayer.currentAudio.pause();
    }
    if (isAudioAlreadyPresent) {
        audioPlayer.currentAudioId = isAudioAlreadyPresent.play();
        return;
    }
    try {
        await audioPlayer.play(audioFile);
        updateState();
    }
    catch (error) {
        console.log(error);
    }
}

function getAudioRealtedData(props) {
    console.log(props);
    if (props.currentClickedItem && !!props.getLoadedFiles) {
        const index = props.currentClickedItem - 1;
        const src = props.getLoadedFiles[index];
        const playData = {
            src,
            index,
        }
        play(playData, {
            audioProgress: props.audioProgress,
            audioCurrentDurationUpdate: props.audioCurrentDurationUpdate,
            audioRemainingDurationUpdate: props.audioRemainingDurationUpdate
        });
    }
    return (<div>{props.currentAudioName}</div>);
}

const mapStateToProps = function (state) {
    return {
        currentClickedItem: getCLickedItem(state),
        getLoadedFiles: getLoadedFiles(state),
        currentAudioName: getCurrentAudioName(state),
    }
}

export default connect(mapStateToProps, {
    audioProgress,
    audioCurrentDurationUpdate,
    audioRemainingDurationUpdate
})(getAudioRealtedData);