import React from 'react';

class TextArea extends React.Component {
  render() {
    return (
      <label>
        {this.props.label}
        <textarea 
          name={this.props.name} 
          type="text" 
          value={this.props.value} 
          onChange={this.props.onChange} />
      </label>
    );
  }
}

export default TextArea;