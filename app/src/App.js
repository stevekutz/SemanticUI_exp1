import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Button, Icon } from "semantic-ui-react";

const ButtonExampleButton = () => <Button>Click Here this</Button>;

const ButtonExampleShorthand = () => <Button content='Using shorthands' />

const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
)

const ButtonExampleAnimated = () => (
  <div>
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical up'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    <Button animated ='fade'>
      <Button.Content visible>Sign-up for a Pro account</Button.Content>
      <Button.Content hidden>$12.99 a month</Button.Content>
    </Button>
  </div>
)

const ButtonExampleBasic = () => (
  <div>
    <Button basic>Standard</Button>
    <Button basic color='red'>
      Red
    </Button>
    <Button inverted color='red'>
    Red inverted
  </Button>
    <Button basic color='purple'>
      Purple
    </Button>
    <Button inverted color='purple'>
    Purple inverted
  </Button>
  </div>
)
const ButtonExampleBasicShorthand = () => (
  <div>
    <Button content='Standard' basic />
    <Button basic color='red' content='Red' />
    <Button basic color='violet' content='Violet' />
    <Button basic color='purple' content='Purple' />
  </div>
)


function App() {
  return (
    <div className="App">
      <ButtonExampleButton />
      <ButtonExampleShorthand />
        <h4> Emphasis </h4>
        <ButtonExampleEmphasis /> 
      <ButtonExampleAnimated />
    
      <ButtonExampleBasic />
      <ButtonExampleBasicShorthand />
    
    
    
    </div>
  );
}

export default App;
