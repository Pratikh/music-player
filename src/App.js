import './App.css';
import PlayButton from './controllers/PlayButton'
import PreviousAndNextButton from './controllers/PreviousAndNextButton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PreviousAndNextButton type='previous'/>
        <PlayButton />
        <PreviousAndNextButton type='next'/>
      </header>
    </div>
  );
}

export default App;
