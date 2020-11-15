import React, { useState, useEffect } from 'react';
import eventEmitter from '../controllers/eventEmitter'
import './style.css'

function ProgressBarSetter() {
    const [value, setValue] = useState(0);

    function onComponentChange() {
        const valueUpdate = (emittedValue) => {
            setValue(emittedValue);
        }
        eventEmitter.on('updateprogress', valueUpdate);
        return function cleanup() {
            eventEmitter.removeListener('updateprogress', valueUpdate)
        }
    }

    useEffect(onComponentChange, [value]);
    return (
        <>
            <div className='Progress'>
                <div className='progressTimer'>
                    <RemainingMinuts />
                    <p>:</p>
                    <RemainingSeconds />
                </div>
                <progress type="range" min="1.5" max="100" value={value} />
                <div className='progressTimer'>
                    <CurrentMinuts />
                    <p>:</p>
                    <CurrentSeconds />
                </div>
            </div >
        </>
    );
}

function RemainingSeconds() {
    const [remainSeconds, setRemainSeconds] = useState(0);
    function onChange() {
        const remainingTimer = ({
            minut,
            seconds,
        }) => {
            setRemainSeconds(seconds);
        };
        eventEmitter.on('audioremainingduration', remainingTimer);
        return function cleanup() {
            eventEmitter.removeListener('audioremainingduration', remainingTimer)
        }
    }

    useEffect(onChange, [remainSeconds]);
    return (<>
        <p>{remainSeconds}</p>
    </>)

}

function RemainingMinuts() {
    const [remainMinut, setRemainMinut] = useState(0);
    function onChange() {
        const remainingTimer = ({
            minut,
        }) => {
            setRemainMinut(minut);
        };
        eventEmitter.on('audioremainingduration', remainingTimer);
        return function cleanup() {
            eventEmitter.removeListener('audioremainingduration', remainingTimer)
        }
    }

    useEffect(onChange, [setRemainMinut]);
    return (<>
        <p>{remainMinut}</p>
    </>)
}

function CurrentSeconds() {
    const [currentSeconds, setCurrentSeconds] = useState(0);
    function onChange() {
        const remainingTimer = ({
            seconds,
        }) => {
            setCurrentSeconds(seconds);
        };
        eventEmitter.on('audiocurrentduration', remainingTimer);
        return function cleanup() {
            eventEmitter.removeListener('audiocurrentduration', remainingTimer)
        }
    }

    useEffect(onChange, [currentSeconds]);
    return (<>
        <p>{currentSeconds}</p>
    </>)
}

function CurrentMinuts() {
    const [currentMinut, setCurrentMinut] = useState(0);
    function onChange() {
        const remainingTimer = ({
            minut,
        }) => {
            setCurrentMinut(minut);
        };
        eventEmitter.on('audiocurrentduration', remainingTimer);
        return function cleanup() {
            eventEmitter.removeListener('audiocurrentduration', remainingTimer)
        }
    }

    useEffect(onChange, [setCurrentMinut]);
    return (<>
        <p>{currentMinut}</p>
    </>)
}

export default ProgressBarSetter;
