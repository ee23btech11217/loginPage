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
    url: process.env.PUBLIC_URL + '/iith-2  .jpg', // Image URL for recruiter
    title: 'Recruiter',
    width: '20%',
    route: '/recruiter', // Route for recruiter
  },
  {
    url: process.env.PUBLIC_URL + '/iith-3.jpg', // Image URL for recruiter
    title: 'Coordinator',
    width: '20%',
    route: '/coordinator', // Route for recruiter
  },
  {
    url: process.env.PUBLIC_URL + '/iith-4.jpg', // Image URL for recruiter
    title: 'Staff',
    width: '20%',
    route: '/staff', // Route for recruiter
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
