import React from 'react';
import playButton from '../svgButtonDesign/playButton.svg'
import pauseButton from '../svgButtonDesign/pauseButton.svg'

class PlayButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggle:true,
    }
    this.handleButtonClick = this.clickedOnButton.bind(this);
  }

  clickedOnButton(){
    this.setState({ toggle: !this.state.toggle })
  }

  render(){
    let button = <img src={pauseButton} alt='pause-button' />;
    if(this.state.toggle){
      button = <img src={playButton} alt='play-button' />;
    }
    return (
      <div className='Interaction-button' onClick={this.handleButtonClick} >
      { button }
      </div>
    )
  }
}

export default PlayButton;
