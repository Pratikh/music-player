import React from 'react';
import previousButton from '../svgButtonDesign/previousButton.svg'
import audioPlayer from '../controllers/audioPlayer';
import { connect } from 'react-redux';
import { updateClickedAudioItem, currentClickedAudioName } from '../redux/actions'
import { getCLickedItem, loadedFile, getCurrentAudioName } from '../redux/selector';

class PreviousAndNextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    }
    this.handleButtonClick = this.clickedOnButton.bind(this);
  }

  clickedOnButton() {
    const { type } = this.props;
    console.log('Clicked', this.props);
    if (audioPlayer.currentAudio) {
      audioPlayer.currentAudio.pause();
    }
    let index = this.props.currentClickedItem;
    let fileName = '';
    if (this.props.currentClickedItem > 0 && type !== 'next') {
      index--;
    } else if (this.props.currentClickedItem < this.props.loadedFile.length && type === 'next') {
      index++;
    }
    console.log(index,this.props.currentClickedItem < this.props.loadedFile.length);
    fileName = this.props.loadedFile[index].fileName;
    this.props.updateClickedAudioItem(index);
    this.props.currentClickedAudioName(fileName);
  }

  render() {
    let button = <img src={previousButton} alt='pause-button' />;
    if (this.props.type === "next") {
      button = <img src={previousButton} alt='next-button' style={{ transform: 'scaleX(-1)' }} />;
    }
    return (
      <div className='Interaction-button' onClick={this.handleButtonClick} >
        {button}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    currentClickedItem: getCLickedItem(state),
    loadedFile: loadedFile(state),
    currentAudioName: getCurrentAudioName(state),
  }
}

export default connect(mapStateToProps, { updateClickedAudioItem, currentClickedAudioName })(PreviousAndNextButton);
