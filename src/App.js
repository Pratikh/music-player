import './App.css';

import components from './components/index'

const { PlayButton, PreviousAndNextButton,
  FileOpenHandler, AudioFilesList, Volume, ProgressBar } = components

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AudioFilesList />
        <FileOpenHandler />
        <ProgressBar value='0' />
        <div className="Audio-Controller">
          <PreviousAndNextButton type='previous' />
          <PlayButton />
          <PreviousAndNextButton type='next' />
        </div>
        <Volume />
      </header>
    </div>
  );
}

export default App;
