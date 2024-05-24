// App.js
import React from 'react';
import ImageButton from './features/button'; 
import StudentLogin from './features/studentLogin';
import RecruiterLogin from './features/recruiterLogin';

const images = [
  {
    url: process.env.PUBLIC_URL + '/iith.jpg', // Image URL for student
    title: 'Student',
    width: '20%',
  },
  {
    url: process.env.PUBLIC_URL + '/iith.jpg', // Image URL for recruiter
    title: 'Recruiter',
    width: '20%',
  },
];

function App() {
  return (
    <div>
      <h2>Choose Your Role</h2>
      <div>
        {images.map((image, index) => (
          <ImageButton key={index} image={image} />
        ))}
      </div>
      {/* Assuming the login components are rendered conditionally based on the path */}
      {window.location.pathname === '/student' && <StudentLogin />}
      {window.location.pathname === '/recruiter' && <RecruiterLogin />}
    </div>
  );
}

export default App;
