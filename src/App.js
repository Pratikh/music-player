import { connect } from 'react-redux';
import './App.css';
import components from './components/index'
import filePreloader from './controllers/filePreloader'
import { addFiles, loadFiles } from './redux/actions';

const { PlayButton, PreviousAndNextButton,
  FileOpenHandler, AudioFilesList, Volume, ProgressBar, PlayingAudio } = components

function App(props) {
  filePreloader.loadAsset(()=>{
    props.addFiles(filePreloader.fileData);
  });
  return (
    <div className="App">
      <header className="App-header">
        <AudioFilesList />
        <FileOpenHandler />
        <ProgressBar value='0' />
        <Volume />
        <div className="Audio-Controller">
          <PreviousAndNextButton type='previous' />
          <PlayButton />
          <PreviousAndNextButton type='next' />
        </div>
        <PlayingAudio />
      </header>
    </div>
  );
}


export default connect(null, { addFiles, loadFiles })(App);
