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
          status_code: 0
        });
      })
      .catch((error) => {
        console.log(error);
        setStudent({
          name: name,
          email: email,
          status_code: 0
        });
      });
  };

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
    <button type="submit">Submit</button>
  </form>
  <div>
    <p>Name: {student.name}</p>
    <p>Email: {student.email}</p>
  </div>
</div>
  );
}

export default AddStudent;



