import React from "react";
import { useSelector } from "react-redux";

import PersonCard from "./PersonCard";
import { Card } from "semantic-ui-react";

function PersonList() {
  console.log("single-spa-poc-persons");

  const persons = useSelector((state) => state.persons);
  
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
