import React from 'react';

class Input extends React.Component {
  render() {
    return(
      <label>
        {this.props.label}
        <input 
          name={this.props.name}
          type="text"
          value={this.props.value} 
          onChange={this.props.onChange} />
      </label>
    );
  }
}

export default Input;
