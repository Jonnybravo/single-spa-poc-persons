import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Icon, Image, Message, Label } from "semantic-ui-react";
import { persons } from "../database/persons";

function Person() {
  const { name } = useParams();
  const [person, setPerson] = useState({});

  useEffect(() => {
    let p = persons.find((person) => person.characterName === name);
    if (!p.characterImageFull)
      p.characterImageFull =
        "https://react.semantic-ui.com/images/wireframe/image.png";
    setPerson(p);
  });

  const loadFamily = (family) => {
    return (
      <ul>
        {family.map((f) => (
          <li><Link to={`/persons/${f}`}>{f}</Link></li>
        ))}
      </ul>
    );
  };

  return (
    <Container>
      {!person && <Icon loading name="spinner" size="big" />}
      {person && (
        <Container style={{ display: "flex", marginTop: "20px" }}>
          <Image
            circular
            src={person.characterImageFull}
            style={{
              margin: "10px 30px 0 0",
              width: "400px",
              height: "400px",
              objectFit: "cover",
            }}
          />
          <div style={{width: "50%"}}>
            <h1>{person.characterName}</h1>
            {person.houseName && (
              <div style={{margin: "10px"}}>
                <b>House name:</b>
                <Label color="teal">{person.houseName}</Label>
              </div>
            )}
            {person.nickname && (
              <div>
                <b>Nickname:</b> {person.nickname}
              </div>
            )}
            {person.royal && <Label color="yellow">Royal</Label>}
            {person.killedBy && (
              <Label color="black">
                Killed by:<Label.Detail>{person.killedBy}</Label.Detail>
              </Label>
            )}
            <Message
              header="Family Tree"
              content={
                <ul>
                  {person.parents && (
                    <li>Parents: {loadFamily(person.parents)}</li>
                  )}
                  {person.siblings && (
                    <li>Siblings: {loadFamily(person.siblings)}</li>
                  )}
                  {person.marriedEngaged && (
                    <li>Married: {loadFamily(person.marriedEngaged)}</li>
                  )}
                  {person.parentOf && (
                    <li>
                      Parent of:
                      {loadFamily(person.parentOf)}
                    </li>
                  )}
                </ul>
              }
            />
          </div>
        </Container>
      )}
    </Container>
  );
}

export default Person;
