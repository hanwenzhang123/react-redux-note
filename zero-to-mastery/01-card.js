//card-list.component.jsx 
import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

//card.component.jsx
import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
  </div>
);
  
