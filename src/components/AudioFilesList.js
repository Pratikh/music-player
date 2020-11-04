import React from 'react';
import { connect } from "react-redux";
import { loadedFile } from '../redux/selector';
import './filesList.css'

const list = [
  { fileName: 'first audio', index: 1 },
  { fileName: 'first audio', index: 2 },
  { fileName: 'first audio', index: 3 },
  { fileName: 'first audio', index: 4 },
  { fileName: 'first audio', index: 5 },
  { fileName: 'first audio', index: 6 },
]

function getFileList(files) {
  return files.map(({ fileName, index }) => {
    return (<li style={{ textAlign: 'left' }} key={index}>{fileName}</li>)
  })
}

function audioNameList(props) {
  console.log('PROPS', props);
  return (
    <div className='myBox'>
      <ol>
        {getFileList(props.files || list)}
      </ol>
    </div>
  );
}

const mapStateToProps = function (state) {
  const files = loadedFile(state);
  return { files };
}

export default connect(mapStateToProps)(audioNameList);