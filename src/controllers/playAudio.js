import { connect } from "react-redux";
import { getCLickedItem } from '../redux/selector';
import audioPlayer from './audioPlayer'

export async function playAudios(audioFilesList) {
    for (let index = 0; index < audioFilesList.length; index++) {
        const file = audioFilesList[index];
        await play(file);
    }
};

export function play(audioFile) {
    return new Promise((reject, resolve) => {
        audioPlayer.play(audioFile, reject, resolve);
    }).catch(error => {
        console.log('Got error', error);
    });
}

function getAudioRealtedData(props) {
    console.log(props);
    return (<></>);
}

const mapStateToProps = function (state) {
    return {
        currentClickedItem: getCLickedItem(state),
    }

}

export default connect(mapStateToProps)(getAudioRealtedData);