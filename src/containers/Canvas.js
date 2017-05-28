import React from "react";
import { connect } from "react-redux";
import CanvasComponent from "../components/Canvas";

class Canvas extends React.Component {
  render() {
    return (
      <CanvasComponent />
    );
  }
}

export default connect()(Canvas);
