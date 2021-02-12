import React from "react";

import PersonCard from "./PersonCard";
import { Card } from "semantic-ui-react";
import { persons } from "../database/persons";

function PersonList() {
  console.log("single-spa-poc-persons")
  return (
    <>
      <h1>Persons List</h1>
      <Card.Group>
        {persons.map((person, idx) => (
          <PersonCard key={idx} {...person} />
        ))}
      </Card.Group>
    </>
  );
}
export default PersonList;
