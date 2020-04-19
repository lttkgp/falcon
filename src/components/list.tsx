import React from 'react';
import Card from './card';

const dummyData = [1, 2, 3, 4, 5];

export default function List() {
  return (
    <div className='list'>
      <h1 className='title'>Most viewed songs</h1>
      <div className='array'>
        {dummyData.map((num) => (
          <Card id={num} />
        ))}
      </div>
    </div>
  );
}
