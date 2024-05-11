import { Component } from 'react';

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  updateInputValue = value => {
    this.setState({ inputValue: value });
  };
  render() {
    const { theme } = this.props;
    return <input onChange={e => this.updateInputValue(e.target.value)} placeholder="Email" />;
  }
}

export default EmailInput;
