import { connect } from 'react-redux';
import './App.css';
import components from './components/index'
import filePreloader from './controllers/filePreloader'
import { addFiles, loadFiles } from './redux/actions';
import Loader from 'react-loader-spinner'

let isRenderedOnce = false;

const {
  PlayButton,
  PreviousAndNextButton,
  FileOpenHandler,
  AudioFilesList,
  Volume,
  ProgressBar,
  PlayingAudio } = components

function Spinner(props) {
  return (
    <Loader
      className="Center-content-to-screen"
      type="Circles"
      color="#00BFFF"
      height={80}
      width={80}
      visible={!props.isFilesLoaded}
    />)
}

function appBody() {
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

function App(props) {
  if (!isRenderedOnce) {
    isRenderedOnce = true;
    filePreloader.loadAsset(() => {
      props.addFiles({ files: filePreloader.fileData, isFilesLoaded: true });
    });
  }
  const spinner = props.isFilesLoaded ? appBody() : Spinner(props)
  return (
    <div>
      {spinner}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isFilesLoaded: state.fileInput.isFilesLoaded,
  }
}

export default connect(mapStateToProps, { addFiles, loadFiles })(App);
