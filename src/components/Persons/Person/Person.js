import React from 'react';
import './Person.css';
import PropTypes from 'prop-types';

class Person extends React.Component {
    style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    };
    constructor(props) {
      super(props);
      this.inputElementRef = React.createRef();
    }
    componentDidMount() {
      // this.inputElement.focus();
      this.inputElementRef.current.focus();
    }
    render() {
      console.log('[Person.js] rendering...');
      return (
          <div className="Person" style={this.style}>
              <p onClick={this.props.click}>I am {this.props.name} and my age is {this.props.age}</p>
              <p>{this.props.children}</p>
              <input
                onChange={this.props.changed}
                value={this.props.name}
                // ref={(inputEle) => {this.inputElement = inputEle}}
                ref={this.inputElementRef}
                >
              </input>
          </div>
      );
    }

}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
}

export default Person;
