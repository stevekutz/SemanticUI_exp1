import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Button } from "semantic-ui-react";

const ButtonExampleButton = () => <Button>Click Here this</Button>;

const ButtonExampleShorthand = () => <Button content='Using shorthands' />

function App() {
  return (
    <div className="App">
      <ButtonExampleButton />
      <ButtonExampleShorthand />
    </div>
  );
}

export default App;
