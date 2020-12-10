import React, { createRef, Component } from 'react';
import { connect } from 'react-redux'
import folderOpenIcon from '../svgButtonDesign/folder-open.svg'
import { addFiles, loadFiles } from '../redux/actions';
import fileLoader from '../controllers/fileInputeLoader'
import './style.css'

class FileOpenHandler extends Component {
  constructor(props) {
    super(props);
    this.fileDialogueRef = createRef();
    this.onButtonClickHandler = this.onButtonClick.bind(this);
    this.getSelectedFilesBinded = this.getSelectedFiles.bind(this);
  }

  onButtonClick() {
    this.fileDialogueRef.current.click();
  }

  async getSelectedFiles({ target }) {
    const { fileData } = await fileLoader(target);
    this.props.addFiles({ files: fileData, isFilesLoaded: true });
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
        <button className='fileButton' onClick={this.onButtonClickHandler}>Open File</button>
      </div>
    )
  }
}

export default connect(null, { addFiles, loadFiles })(FileOpenHandler);
