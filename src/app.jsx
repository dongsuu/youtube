import './app.css';
import Home from './components/Home.jsx';
import Details from './components/Details.jsx'
import Youtube from './youtubeService/youtube.js';

function App({youtube}) {
  return (
    <div className="App">
      < Home youtube = {youtube}/>
    </div>
  );
}

export default App;
