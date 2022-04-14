import React from 'react';
import './App.css'
import Axios from 'axios';

function App() {
      const [joke, setJoke] = React.useState('')

  const getJoke = () => {
      Axios.get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup + "....." + response.data.punchLine);
      })
  }
  return (
    <div className="App">
          <div className="btn">
              <button onClick={getJoke}>Get Joke</button>
              
              {/* state called here */}
              <div>{joke}</div>
        </div>
    </div>
  );
}

export default App;
