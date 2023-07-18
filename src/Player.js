import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Player = ([ 
  name = "Unknown",
  team = "Unknown",
  nationality = "Unknown",
  jerseyNumber = "Unknown",
  age = "Unknown",
   imageUrl = "",
  ]) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          <String >Name</String> {name}
        </Card.Text>

        <Card.Text>
          <String >Team</String> {team}
        </Card.Text>

        <Card.Text>
          <String >Nationality</String> {Nationality}
        </Card.Text>

        <Card.Text>
          <String >jerseyNumber</String> {jerseyNumber}
        </Card.Text>

        <Card.Text>
          <String >age</String> {age}
        </Card.Text>
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Player;

