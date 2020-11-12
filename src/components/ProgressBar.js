import React from 'react';
import './style.css'
import { connect } from 'react-redux'

function ProgressBarSetter(props) {
    return (
        <>
            <div className='Progress'>
                <div className='progressTimer'> <RemainingMinuts minut={props.remainingDuration.minut} /> <p>:</p> <RemainingSeconds seconds={props.remainingDuration.seconds}/></div>
                <progress type="range" min="1.5" max="100" value={props.value} />
                <div className='progressTimer'> <CurrentMinuts minut={props.currentDurartion.minut} /> <p>:</p> <CurrentSeconds seconds={props.currentDurartion.seconds}/></div>
            </div >
        </>
    );
}

function RemainingSeconds(props) {
    return (<>
        <p>{props.seconds}</p>
    </>)

}

function RemainingMinuts(props) {
    return (<>
        <p>{props.minut}</p>
    </>)
}

function CurrentSeconds(props) {
    return (<>
        <p>{props.seconds}</p>
    </>)
}

function CurrentMinuts(props) {
    return (<>
        <p>{props.minut}</p>
    </>)
}

function mapPropsToState(state) {
    return {
        value: state.audioProgress.value,
        currentDurartion: state.audioProgress.currentDurartion,
        remainingDuration: state.audioProgress.remainingDuration,
    }
}

export default connect(mapPropsToState)(ProgressBarSetter);

