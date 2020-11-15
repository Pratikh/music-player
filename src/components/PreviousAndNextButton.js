import React from 'react';
import previousButton from '../svgButtonDesign/previousButton.svg'

class PreviousAndNextButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    }
    this.handleButtonClick = this.clickedOnButton.bind(this);
  }

  clickedOnButton() {
    console.log('Clicked', this.props);
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

export default PreviousAndNextButton;
