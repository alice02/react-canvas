import React from "react";
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: 1,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, val) {
    this.setState({value: val});
  }

  render() {
    const paperStyle = {
      height: 80,
      width: "100%",
      margin: 0,
      textAlign: 'center',
      display: 'inline-block',
    };

    const searchIconStyle = {
      margin: 10,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <Paper style={paperStyle} zDepth={2} rounded={false}>
        <div style={{ display: 'flex', justifyContent: "center" }}>
          <SelectField
            value={this.state.value}
            onChange={this.handleChange}
            floatingLabelText="Type"
            style={{alignSelf: 'flex-end', marginLeft: 20, width: 150 }}
          >
            <MenuItem value={1} primaryText="ID" />
            <MenuItem value={2} primaryText="Email" />
          </SelectField>
          <TextField
            floatingLabelText='ID or Email'
          />

        </div>
      </Paper>
    );
  }
}
