import { persons } from "../database/persons";
import { FETCH_PERSONS, GET_PERSONS } from "./actionTypes";

export const fetchPersons = (dispatch, getState) => {
  const currentState = getState();

  if (!currentState.persons) {
    //axios
    dispatch({
      type: FETCH_PERSONS,
      payload: persons,
    });
  } else {
    dispatch({
      type: GET_PERSONS,
    });
  }
};
