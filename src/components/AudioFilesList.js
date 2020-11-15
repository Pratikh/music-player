import React from 'react';
import { connect } from "react-redux";
import { loadedFile } from '../redux/selector';
import { updateClickedAudioItem, playPauseButton, currentClickedAudioName } from '../redux/actions'
import './style.css'

const list = [
  { fileName: 'first audio', index: 1 },
  { fileName: 'second audio', index: 2 },
  { fileName: 'third audio', index: 3 },
  { fileName: 'fourth audio', index: 4 },
  { fileName: 'fifth audio', index: 5 },
  { fileName: 'sixth audio', index: 6 },
]

function onListClick(index, name) {
  this.updateClickedAudioItem(index + 1);
  this.playPauseButton(true);
  this.currentClickedAudioName(name)
}

function getFileList({ props, files }) {
  return files.map(({ fileName, index }) => {
    const bindedCallback = onListClick.bind(props, index, fileName);
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

export default connect(mapStateToProps, { updateClickedAudioItem, playPauseButton, currentClickedAudioName })(audioNameList);