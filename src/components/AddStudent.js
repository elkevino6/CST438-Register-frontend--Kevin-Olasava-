import React, { useState } from 'react';
import axios from 'axios';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [student, setStudent] = useState({
    name: '',
    email: '',
    statusCode: 0
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      name: name,
      email: email
    };
    
    axios.post('http://localhost:8080/student', data)
      .then((response) => {
        console.log(response);
        setStudent({
          name: name,
          email: email,
          statusCode: 201
        });
        setName('');
        setEmail('');
      })
      .catch((error) => {
        console.log(error);
        setStudent({
          name: name,
          email: email,
          statusCode: 400
        });
      });
  };

  let message;
  if (student.statusCode === 201) {
    message = <p>Student added successfully</p>;
  } else if (student.statusCode === 400) {
    message = <p>Error adding student</p>;
  }

  return (
    <div>
      <h2>Add a New Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button id="Add" type="submit">Submit</button>
      </form>
      <div>
        <p>Name: {student.name}</p>
        <p>Email: {student.email}</p>
        {message}
      </div>
    </div>
  );
}

export default AddStudent;
