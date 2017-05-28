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
      height: 80,
      width: "100%",
      display: 'inline-block',
    };

    return (
      <div>
          <TextField
            floatingLabelText="ID"
          />
          <RaisedButton
            label="Search"
            primary={true}
            onTouchTap={(e) => this.props.handleSubmit(e)}
            disabled={this.props.isFetching}
          />
      </div>
    );
  }
}

export default SearchBar;
