import React from 'react';
import playButton from '../svgButtonDesign/playButton.svg'
import pauseButton from '../svgButtonDesign/pauseButton.svg'
import audioPlayer from '../controllers/audioPlayer';
import { connect } from 'react-redux'
import { playPauseButton } from '../redux/actions'


class PlayButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.clickedOnButton.bind(this);
  }

  clickedOnButton() {
    this.props.playPauseButton(!this.props.toggle)
    if (this.props.toggle) {
      audioPlayer.currentAudio.pause();
    } else {
      audioPlayer.currentAudio.play();
    }
  }

  render() {
    let button = <img src={playButton} alt='pause-button' />;
    if (this.props.toggle) {
      button = <img src={pauseButton} alt='play-button' />;
    }
    return (
      <div className='Interaction-button' onClick={this.handleButtonClick} >
        { button}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    toggle: state.audioButton.toggle,
  }
}

export default connect(mapStateToProps, { playPauseButton })(PlayButton);
