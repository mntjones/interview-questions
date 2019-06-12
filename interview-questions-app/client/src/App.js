import React from 'react';
import Card from './containers/Card'
import NextCardButton from './components/NextCardButton'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>Interview Questions</h1>
      </header>

      <body>
        <div className="App-card">
          < Card />
        </div>
        <div className="App-button">
          < NextCardButton />
        </div>
      </body>

    </div>
  );
}

export default App;
