import React from 'react';
import { connect } from "react-redux";
import { loadedFile } from '../redux/selector';
import { updateClickedAudioItem, playPauseButton } from '../redux/actions'
import AudioUpdater from '../controllers/playAudio'
import './style.css'

const list = [
  { fileName: 'first audio', index: 1 },
  { fileName: 'first audio', index: 2 },
  { fileName: 'first audio', index: 3 },
  { fileName: 'first audio', index: 4 },
  { fileName: 'first audio', index: 5 },
  { fileName: 'first audio', index: 6 },
]

function onListClick(index) {
  console.log(this);
  this.updateClickedAudioItem(index + 1);
  this.playPauseButton(true);
}

function getFileList({ props, files }) {
  console.log(files, props);
  return files.map(({ fileName, index }) => {
    console.log(this);
    const bindedCallback = onListClick.bind(props, index);
    return (
      <li className='List' key={index} onClick={bindedCallback}>
        {fileName}
      </li>
    );
  })
}

function audioNameList(props) {
  const data = {
    props,
    files: props.files
  };
  const dataList = {
    props,
    files: list
  }
  return (
    <div className='myBox'>
      <AudioUpdater />
      <ol>
        {getFileList(props.files ? data : dataList)}
      </ol>
    </div>
  );
}

const mapStateToProps = function (state) {
  const files = loadedFile(state);
  return { files };
}

export default connect(mapStateToProps, { updateClickedAudioItem, playPauseButton })(audioNameList);