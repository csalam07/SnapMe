import React from 'react';
import Story from './Story';

const data = [
  {
    key: 1,
    image: '/images/profile-8.jpg',
    title: 'Your Story',
  },
  {
    key: 2,
    image: '/images/profile-9.jpg',
    title: 'Fuchi S',
  },
  {
    key: 3,
    image: '/images/profile-10.jpg',
    title: 'Cs Alam',
  },
  {
    key: 4,
    image: '/images/profile-11.jpg',
    title: 'Sammar Alam',
  },
  {
    key: 5,
    image: '/images/profile-12.jpg',
    title: 'Virat Kohli',
  },
  {
    key: 6,
    image: '/images/profile-13.jpg',
    title: 'Dorem Mon',
  },

  {
    key: 7,
    image: '/images/profile-13.jpg',
    title: 'Notbi Mon',
  },
];

function Stories() {
  return (
    <div class="stories">
      {data.map((item) => (
        <Story key={item.key} image={item.image} title={item.title} />
      ))}
    </div>
  );
}

export default Stories;
