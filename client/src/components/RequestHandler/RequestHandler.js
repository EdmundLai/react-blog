import React from 'react';

class RequestHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: []
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(list => this.setState(
        {
          message: list
        }
      ));
  }

  render() {
    return(
      <div className="RequestHandler">
        {this.state.message.map(message => <div>{message.text}</div>)}
      </div>
    );
  }
}

export default RequestHandler;