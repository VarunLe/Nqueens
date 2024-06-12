import React from "react";
import "./Node.css";
class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const extraClassName = this.props.color;
    return (
      <div
        id={`node-${this.props.row}-${this.props.col}`}
        className={`node node-${extraClassName}`}
      ></div>
    );
  }
}
export default Node;
