import React from "react";
import { connect } from "react-redux";
import HeaderComponent from "../components/Header";

class Header extends React.Component {
  render() {
    return (
      <HeaderComponent />
    );
  }
}

export default connect()(Header);
