export const FETCH_LOCATIONS = "FETCH_LOCATIONS";
export function fetchLocations() {
  return {
    type: FETCH_LOCATIONS
  };
}

export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export function receiveLocations(locations) {
  return {
    type: RECEIVE_LOCATIONS,
    locations: locations
  };
}


function getLocations(store) {
  return dispatch => {
    dispatch(fetchLocations());
    return fetch("http://localhost:3000/").then((response) => {
      return response.json();
    }).then((json) => {
      console.log(json.data)
      dispatch(receiveLocations(json.data.locations))
    }).catch((error) => {
      console.log(error)
    });
  };
}

export function getLocationsIfNeeded() {
  return (dispatch, getState) => {
    if (getState().isFetching) {
      return Promise.resolve();
    } else {
      return dispatch(getLocations());
    }
  };
}
