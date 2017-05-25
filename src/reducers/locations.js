import {
  FETCH_LOCATIONS,
  RECEIVE_LOCATIONS
} from "../actions"

function locations(state = {isFetching: false, locations: []}, action) {
  switch(action.type) {
    case FETCH_LOCATIONS:
      let hoge = Object.assign({}, state, {
        isFetching: true
      });
      console.log(hoge)
      return hoge;
    case RECEIVE_LOCATIONS:
      let hoge2 = Object.assign({}, state, {
        isFetching: false,
        locations: action.locations
      });
      console.log(hoge2);
      return hoge2;
    default:
      return state
  }
}

export default locations;
