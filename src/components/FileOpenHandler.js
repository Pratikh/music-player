import React from 'react';
import { connect } from 'react-redux'
// import { audioPlayer } from '../controllers/audioPlayer'
import folderOpenIcon from '../svgButtonDesign/folder-open.svg'
import { addFiles } from '../redux/actions'

class FileOpenHandler extends React.Component {
  constructor(props) {
    super(props);
    this.fileDialogueRef = React.createRef();
    this.onButtonClickHandler = this.onButtonClick.bind(this);
    this.getSelectedFilesBinded = this.getSelectedFiles.bind(this);
    this.state = {
      filesAdded: true,
      files: null,
    }
  }

  onButtonClick() {
    this.fileDialogueRef.current.click();
  }

  getSelectedFiles({ target }) {
    let fileData = [];
    for (let i = 0; i < target.files.length; i++) {
      const file = target.files.item(i);
      fileData.push({
        fileName: file.name,
        index: i,
      })
      const fileReader = new FileReader();
      // let fileReadData = null;
      fileReader.addEventListener('load', () => {
        this.props.addFiles(fileData);
        // fileReadData = fileReader.result;
      });
      fileReader.addEventListener('loadend', () => {
        // fileReadData = fileReader.result;
        // window.audioId = audioPlayer.play(fileReadData)
      });
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div>
        <input
          type='file'
          ref={this.fileDialogueRef}
          style={{ display: "none" }}
          src={folderOpenIcon}
          onChange={this.getSelectedFilesBinded}
          onClick={(event) => {
            event.currentTarget.value = null
          }}
          multiple accept='audio/*' />
        <button onClick={this.onButtonClickHandler}>Open File</button>
      </div>
    )
  }
}

export default connect(null, { addFiles })(FileOpenHandler);
