import React from 'react';
import { audioPlayer } from './audioPlayer'

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
      console.log('heree');
      let data = null;
      fileReader.addEventListener('load',()=>{
        data = fileReader.result;
        // console.log(data);
        audioPlayer.play(data)
      });
      fileReader.addEventListener('loadend',()=>{
        data = fileReader.result;
        console.log(' Load End');
      });
      fileReader.readAsDataURL(file);
    }

  }

  render(){
    return(
      <div>
        <input type='file' ref={this.fileDialogueRef} style={{display: "none"}} onChange={this.getSelectedFilesBinded} multiple  accept='audio/*' />
        <button onClick={this.onButtonClickHandler}>Open File</button>
      </div>
    )
  }
}
