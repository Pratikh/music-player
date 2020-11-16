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
    console.log('In playing function',props.currentClickedItem,!!props.currentClickedItem ,!!props.loadedFile);
    if (!!props.currentClickedItem && !!props.loadedFile) {
        const index = (+props.currentClickedItem);
        const { data: src, fileName } = props.loadedFile[index];
        console.log(props.loadedFile, index, fileName);
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