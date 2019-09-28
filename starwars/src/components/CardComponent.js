import React from 'react';
import {Card, CardTitle, CardText, Col} from 'reactstrap';
import './StarWars.css';

export default function CardComponent(props) {
  return (
    <Col xs="6" xl="4" height="100%">
      <Card className="card">
        <CardTitle tag="h2">{props.name}</CardTitle>
        <CardText>Gender: {props.gender}</CardText>
        <CardText>Birth Year: {props.birth_year}</CardText>
        <CardText>Hair Color: {props.hair_color}</CardText>
        <CardText>Eye Color: {props.eye_color}</CardText>
        <CardText>Mass: {props.mass}</CardText>
        <CardText>Height: {props.height}</CardText>
      </Card>
    </Col>
  );
}