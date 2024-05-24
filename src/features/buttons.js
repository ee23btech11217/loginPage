import React from 'react';
import ImageButtonComponent from './button'; // Ensure the import matches the component name

const images = [
  {
    url: `${process.env.PUBLIC_URL}/iith.jpg`, // Image URL for student
    title: 'Student',
    width: '20%',
    route: '/student', // Route for student
  },
  {
    url: `${process.env.PUBLIC_URL}/iith-2.jpg`, // Image URL for recruiter
    title: 'Recruiter',
    width: '20%',
    route: '/recruiter', // Route for recruiter
  },
  {
    url: `${process.env.PUBLIC_URL}/iith-3.jpg`, // Image URL for coordinator
    title: 'Coordinator',
    width: '20%',
    route: '/coordinator', // Route for coordinator
  },
  {
    url: `${process.env.PUBLIC_URL}/iith-4.jpg`, // Image URL for staff
    title: 'Staff',
    width: '20%',
    route: '/staff', // Route for staff
  },
];

const Buttons = () => {
  return (
    <div className="buttons-container">
      {images.map((image, index) => (
        <ImageButtonComponent
          key={index}
          image={image}
        />
      ))}
    </div>
  );
};

export default Buttons;
