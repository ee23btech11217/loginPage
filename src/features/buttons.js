// Buttons.js
import React from 'react';
import ImageButton from './button';

const images = [
  {
    url: process.env.PUBLIC_URL + '/iith.jpg', // Image URL for student
    title: 'Student',
    width: '20%',
    route: '/student', // Route for student
  },
  {
    url: process.env.PUBLIC_URL + '/iith.jpg', // Image URL for recruiter
    title: 'Recruiter',
    width: '20%',
    route: '/recruiter', // Route for recruiter
  },
];

const Buttons = () => {


  return (
    <div>
      {images.map((image, index) => (
        <ImageButton
          key={index}
          image={image}
        />
      ))}
    </div>
  );
};

export default Buttons;
