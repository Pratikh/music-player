import React, { useState } from 'react';
import audioPlayer from '../controllers/audioPlayer';
import './style.css'


export default function Volume() {
    const [value, setValue] = useState(50);
    function onChange({ target }) {
        const volume = target.value / 100;
        setValue(target.value);
        audioPlayer.currentAudio.playing() && audioPlayer.currentAudio.volume(volume);
    }
    return (
        <div className='Volume'>
            <input type="range" min="1" max="100" value={value} onChange={onChange} />
            <h4>{value}</h4>
        </div >
    )
}