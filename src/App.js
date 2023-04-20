import './App.css';
import Movie from './UI/Movie/Movie';
import Actors from './UI/Actor/Actors';

function App() {
  return (
    <div className="App">
      <Movie directorName={"Perry Smith"}/>
      <Actors/>
    </div>
  );
}

export default App;
