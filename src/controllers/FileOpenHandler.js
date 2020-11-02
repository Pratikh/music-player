import React from 'react';
import { audioPlayer } from './audioPlayer'
import folderOpenIcon from '../svgButtonDesign/folder-open.svg'

export default class FileOpenHandler extends React.Component{
  constructor(props){
    super(props);
    this.fileDialogueRef = React.createRef();
    this.onButtonClickHandler = this.onButtonClick.bind(this);
    this.getSelectedFilesBinded = this.getSelectedFiles.bind(this);
    console.log('in file handler');
  }

  onButtonClick(){
    this.fileDialogueRef.current.click();
  }

  getSelectedFiles({ target }){
    console.log(target.files);
    console.log('here565654644465e');
    for(let i = 0;i<target.files.length;i++){
      const file = target.files.item(i);
      const fileReader = new FileReader();
      let data = null;
      fileReader.addEventListener('load',()=>{
        console.log('FILE ONLOAD',folderOpenIcon);
        data = fileReader.result;
      });
      fileReader.addEventListener('loadend',()=>{
        data = fileReader.result;
        window.audioId =audioPlayer.play(data)
        console.log(' Load End');
      });
      fileReader.readAsDataURL(file);
    }

  }

  render(){
    return(
      <div>
        <input
        type='file'
        ref={this.fileDialogueRef}
        style={{display: "none"}}
        src={folderOpenIcon}
        onChange={this.getSelectedFilesBinded}
        onClick={(event)=> {
               event.currentTarget.value = null
          }}
        multiple  accept='audio/*' />
        <button onClick={this.onButtonClickHandler}>Open File</button>
      </div>
    )
  }
}
