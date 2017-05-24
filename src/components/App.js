import React from "react";

import Header from "./Header"
import Canvas from "./Canvas"
import SearchBar from "./SearchBar"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Canvas />
      </div>
    );
  }
}
