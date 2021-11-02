import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
    // console.log(this.state.message.length);
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          id="message"
          // onChange={(e) => this.handleChange(e)}
          onChange={this.handleChange}
          value={this.state.message}
        />
        <div>
          Character count: {this.props.maxChars - this.state.message.length}
        </div>
      </div>
    );
  }
}

export default TwitterMessage;
