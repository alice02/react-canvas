import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from "./Header";
import Search from "./Search";
import Canvas from "./Canvas";

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Search />
          <Canvas />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
