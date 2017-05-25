import React from "react";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class SearchBar extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log("next")
    console.log(nextProps);
  }

  render() {
    const paperStyle = {
      height: 60,
      width: "100%",
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <Paper style={paperStyle} zDepth={2} rounded={false}>
          <TextField
            floatingLabelText="ID"
          />
          <RaisedButton
            label="Search"
            primary={true}
            onTouchTap={(e) => this.props.handleSubmit(e)}
            disabled={this.props.isFetching}
          />
      {this.props.isFetching ? <CircularProgress /> : <p />}
      </Paper>
    );
  }
}

export default SearchBar;
