import React from "react";
import {Provider} from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import store from "./redux/store";

import PersonList from "./Components/PersonList";
import Person from "./Components/Person";

export default function Root(props) {
  console.log("persons", props)
  return (
    <Provider store={store}>
      <Router>
        <Container>
        <Route path="/" exact>
            <h1>GO TO /persons</h1>
          </Route>
          <Route path="/persons" exact>
            <PersonList />
          </Route>
          <Route path="/persons/:name">
            <Person />
          </Route>
        </Container>
      </Router>
    </Provider>
  );
}
