import React from 'react';
import { connect } from 'react-redux'
// import { audioPlayer } from '../controllers/audioPlayer'
import folderOpenIcon from '../svgButtonDesign/folder-open.svg'
import { addFiles, loadFiles } from '../redux/actions';
import fileLoader from '../controllers/fileInputeLoader'
import assetLoad from '../controllers/filePreloader'
import './style.css'

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
    window.assetLoad = assetLoad;
  }

  componentDidMount() {
    // fetch("/Media/Album/2020%20Grammy%20Nominees/Various%20Artists%20-%202020%20Grammy%20Nominees%20%282020%29/")
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    // fetch('/search?q=javascript')
    // .then(resp => {
    //   console.log('======success=======');
    //   resp.blob().then(re => {
    //     var FR = new FileReader();
    //     FR.onload = event => {
    //       console.log(FR.result);
    //     };
    //     FR.readAsText(re);
    //   });
    // })
    // .catch(err => {
    //   console.log('======failure=======');
    //   console.log(err);
    // });
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
        <button className='fileButton' onClick={this.onButtonClickHandler}>Open File</button>
      </div>
    )
  }
}

export default connect(null, { addFiles, loadFiles })(FileOpenHandler);
