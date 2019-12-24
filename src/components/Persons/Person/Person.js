import React from 'react';
import './Person.css';

class Person extends React.Component {
    style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    };
    render() {
      console.log('[Person.js] rendering...');
      return (
          <div className="Person" style={this.style}>
              <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</p>
              <p>{this.props.children}</p>
              <input onChange={this.props.changed} value={this.props.name}></input>
          </div>
      );
    }

}

export default Person;
