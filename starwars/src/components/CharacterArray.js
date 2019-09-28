import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CardComponent from './CardComponent.js';
import {Container, Row} from 'reactstrap';

export default function CharacterArray() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data);
        setCharacter(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <Row>
        {character.map(props => {
          return (
            <CardComponent
              key={props.name}
              name={props.name}
              gender={props.gender}
              birth_year={props.birth_year}
              hair_color={props.hair_color}
              eye_color={props.eye_color}
              mass={props.mass}
              height={props.height}
            />
          );
        })}
      </Row>
    </Container>
  );
}