import React from 'react';
import { connect } from 'react-redux'
import { getCLickedItem } from '../redux/selector';

import audioPlayer from '../controllers/audioPlayer';
import './style.css'


export function ProgressBar(props) {
    return (
        <div className='Progress'>
            <input type="range" min="1" max="100" value={props.value} />
            <h4>{value}</h4>
        </div >
    )
}

let value = 0;
export function updateAnimation() {
    // console.log(audioPlayer.currentAudio);
    // value = audioPlayer.currentAudio.seek() / audioPlayer.currentAudio.duration();
    // if (audioPlayer.currentAudio.playing()) {
    //     requestAnimationFrame(updateAnimation);
    // } else {
    //     cancelAnimationFrame(updateAnimation);
    // }
}

function ProgressBarSetter(props) {
    return (<ProgressBar value={value} />)
}

const mapPropsToState = function (state) {
    return {
        clicked: getCLickedItem(state),
    }
}

export default connect(mapPropsToState)(ProgressBarSetter)