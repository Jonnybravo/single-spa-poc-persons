import React from "react";
import { Card, Label, Image } from "semantic-ui-react";

function PersonCard({
  characterName,
  characterImageThumb,
  houseName,
  royal,
  killedBy,
}) {
  const image = characterImageThumb
    ? characterImageThumb
    : "https://react.semantic-ui.com/images/wireframe/image.png";
  return (
    <Card href={`/persons/${characterName}`}>
      <Card.Content>
        <Image
          src={image}
          floated="left"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <Card.Header>{characterName}</Card.Header>
        <Card.Meta>
          <span>{houseName}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {royal && <Label color="yellow">Royal</Label>}
        {killedBy && <Label color="black">Killed</Label>}
      </Card.Content>
    </Card>
  );
}
export default PersonCard;
