import { persons } from "../database/persons";

const initialState = {
  persons: persons,
  personsLoaded: false,
  selectedPerson: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
export default reducer;
