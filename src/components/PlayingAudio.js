import { connect } from "react-redux";
import audioPlayer from '../controllers/audioPlayer';
import { getCLickedItem, loadedFile, getCurrentAudioName } from '../redux/selector';
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
        console.error(error);
    }
}

function getAudioRealtedData(props) {
    if (!!props.currentClickedItem && !!props.loadedFile) {
        const index = (+props.currentClickedItem);
        console.log(props.loadedFile, index);
        const { data: src } = props.loadedFile[index];
        const playData = {
            src,
            index,
        }
        play(playData);
    }
    return (<div>{props.currentAudioName}</div>);
}

const mapStateToProps = function (state) {
    return {
        currentClickedItem: getCLickedItem(state),
        loadedFile: loadedFile(state),
        currentAudioName: getCurrentAudioName(state),
    }
}

export default connect(mapStateToProps)(getAudioRealtedData);