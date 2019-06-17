import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ''
    }
    this.abortController = new AbortController();
    this.signal = this.abortController.signal;
  }

  componentDidMount() {
    fetch('/data', {
        signal: this.signal
      })
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.data })
      })
      .catch(err => { console.log('Error at GET request: ', err); })
  }

  componentWillUnMount() {
    this.abortController.abort();
  }

  render() {
    return (
      <div>{this.state.data}</div>
    );
  }
};

export default App;

// let url = 'https://jsonplaceholder.typicode.com/todos/'