import './App.css';

import components from './components/index'

const { PlayButton, PreviousAndNextButton,
  FileOpenHandler, AudioFilesList, Volume, ProgressBar } = components

window.audioId = { id: null };

fetch('https://res.cloudinary.com/djcffe77b/video/upload/v1604324153/a_emeyr3.mp3', {
  cache: 'force-cache',
}).then((result) => {
  console.log('One audio is loaded');
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AudioFilesList></AudioFilesList>
        <FileOpenHandler />
        <div className="Audio-Controller">
          <PreviousAndNextButton type='previous' />
          <PlayButton />
          <PreviousAndNextButton type='next' />
        </div>
        <Volume />
        <ProgressBar></ProgressBar>
      </header>
    </div>
  );
}

export default App;
