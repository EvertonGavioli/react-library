import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyComponent, Button } from './component-lib';

const App: React.FC = () => {
  const handleClick = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <MyComponent color="salmon" text="My awesome react component library" />
        <img src={logo} className="App-logo" alt="logo" />

        <Button bgcolor="#7159c1" disabled={false} isSecondary={false} onClick={handleClick}>Texto</Button>
      </header>
    </div>
  );
}

export default App;
