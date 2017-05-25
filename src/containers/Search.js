import React from "react";
import { connect } from "react-redux";
import Search from "../components/SearchBar";
import { getLocationsIfNeeded } from "../actions";

function mapStateToProps(state) {
  return {
    isFetching: state.locations.isFetching,
    locations: state.locations.locations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: () => { dispatch(getLocationsIfNeeded()) }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
