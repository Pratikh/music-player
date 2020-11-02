import './App.css';
import PlayButton from './controllers/PlayButton'
import PreviousAndNextButton from './controllers/PreviousAndNextButton'
import FileOpenHandler from './controllers/FileOpenHandler'

window.audioId = { id: null};

  fetch('https://res.cloudinary.com/djcffe77b/video/upload/v1604324153/a_emeyr3.mp3',{
    cache:'force-cache',
  }).then((result)=>{
    console.log('One audio is loaded');
  });

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
