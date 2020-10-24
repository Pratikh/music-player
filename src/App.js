import './App.css';
import PlayButton from './controllers/PlayButton'
import PreviousAndNextButton from './controllers/PreviousAndNextButton'
import FileOpenHandler from './controllers/FileOpenHandler'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <FileOpenHandler />
      <PreviousAndNextButton type='previous'/>
        <PlayButton />
        <PreviousAndNextButton type='next'/>
      </header>
    </div>
  );
}

export default App;
