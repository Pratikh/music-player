import React from 'react';
import { connect } from 'react-redux';
import audioPlayer from '../controllers/audioPlayer';
import './style.css'
import { getVolume } from '../redux/selector';
import { audioVolumeUpdate } from '../redux/actions';

function Volume(props) {
    function onChange({ target }) {
        const volume = target.value / 100;
        props.audioVolumeUpdate(target.value);
        audioPlayer.currentAudio && audioPlayer.currentAudio.playing() && audioPlayer.currentAudio.volume(volume);
    }
    return (
        <div className='Volume'>
            <input type="range" min="1" max="100" value={props.volume} onChange={onChange} />
            <p>{props.volume}</p>
        </div >
    )
}

const mapStateToProps = function (state) {
    return {
        volume: getVolume(state),
    }
}

export default connect(mapStateToProps, { audioVolumeUpdate })(Volume);