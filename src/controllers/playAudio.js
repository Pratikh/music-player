import { connect } from "react-redux";
import audioPlayer from './audioPlayer';
import { getCLickedItem, getLoadedFiles } from '../redux/selector';
import { audioProgress, audioCurrentDurationUpdate, audioRemainingDurationUpdate } from '../redux/actions';
import { updateState } from '../controllers/progressBarUpdater'

async function play(audioFile, onStartCallbacks) {
    console.log('In play method');
    const isAudioAlreadyPresent = audioPlayer.audioObjectByIndex[audioFile.index];
    if (audioPlayer.currentAudio) {
        audioPlayer.currentAudio.pause();
    }
    if (isAudioAlreadyPresent) {
        audioPlayer.currentAudioId = isAudioAlreadyPresent.play();
        audioPlayer.currentAudio.onStartCallBacks();
        return;
    }
    try{
        const onStartCallBacks = () => {
            updateState(onStartCallbacks);
        };
        await audioPlayer.play(audioFile, onStartCallBacks);
        audioPlayer.currentAudio.onStartCallBacks = onStartCallBacks;
    }
    catch(error){
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
    return (<></>);
}

const mapStateToProps = function (state) {
    return {
        currentClickedItem: getCLickedItem(state),
        getLoadedFiles: getLoadedFiles(state),
    }

}

export default connect(mapStateToProps, {
    audioProgress,
    audioCurrentDurationUpdate,
    audioRemainingDurationUpdate
})(getAudioRealtedData);