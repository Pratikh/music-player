import React from 'react';
import playButton from '../svgButtonDesign/playButton.svg'
import pauseButton from '../svgButtonDesign/pauseButton.svg'
import { audioPlayer } from './audioPlayer'

class PlayButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle:false,
    }
    this.handleButtonClick = this.clickedOnButton.bind(this);
  }

  clickedOnButton(){
    this.setState({ toggle: !this.state.toggle });
    console.log(this.state.toggle);
    if(this.state.toggle){
      window.audioId.id && audioPlayer.pause(window.audioId.id)
    }else{
      if(!window.audioId.id){
        window.audioId = audioPlayer.play('https://res.cloudinary.com/djcffe77b/video/upload/v1604324153/a_emeyr3.mp3');
        return;
      }
      window.audioId.id && audioPlayer.resume(window.audioId.id)
    }
  }

  render(){
    let button = <img src={playButton} alt='pause-button' />;
    if(this.state.toggle){
      button = <img src={ pauseButton} alt='play-button' />;
    }
    return (
      <div className='Interaction-button' onClick={this.handleButtonClick} >
      { button }
      </div>
    )
  }
}

export default PlayButton;
