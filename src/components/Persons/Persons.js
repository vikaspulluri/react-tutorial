import React from 'react';
import Person from './Person/Person';

class Persons extends React.Component{

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'snapshot!'};
  }

  // componentWillUpdate() {}

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log('[Persons.js] componentDidMount snapshot value', snapshot);
  }

  render() {
    return this.props.persons.map((person, index) => {
      console.log('[Persons.js] rendering...');
      return (
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />
      );
    });
  }

}
export default Persons;
