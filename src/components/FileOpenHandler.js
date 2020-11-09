import React from 'react';
import { connect } from 'react-redux'
// import { audioPlayer } from '../controllers/audioPlayer'
import folderOpenIcon from '../svgButtonDesign/folder-open.svg'
import { addFiles, loadFiles } from '../redux/actions';
import fileLoader from '../controllers/fileInputeLoader'

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

  async getSelectedFiles({ target }) {
    const { fileData, loadedFiles } = await fileLoader(target);
    this.props.addFiles(fileData);
    this.props.loadFiles(loadedFiles);

    console.log('fileLoader component', fileData);
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

export default connect(null, { addFiles, loadFiles })(FileOpenHandler);
