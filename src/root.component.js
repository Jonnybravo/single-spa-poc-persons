import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Container } from "semantic-ui-react";
import PersonList from "./Components/PersonList";
import Person from "./Components/Person";

export default function Root(props) {
  return (
    <Router>
      <Container>
        <Route path="/persons" exact>
          <PersonList />
        </Route>
        <Route path="/persons/:name">
          <Person />
        </Route>
      </Container>
    </Router>
  );
}
