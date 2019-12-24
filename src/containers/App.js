import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Vikas', age: 25},
      {id: 2, name: 'Vicky', age: 24}
    ],
    otherState: 'some random value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {id: 1, name: newName, age: 25},
        {id: 2, name: 'Vicky', age: 25}
      ]
    });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    // const person = {...this.state.persons[personIndex]};
    const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = this.state.persons.slice();
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      );
    }

    

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello world!!!'));
    return (
        <div className="App">
          <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} click={this.togglePersonHandler} />
          {persons}
        </div>
    );
  }
}

export default App;
