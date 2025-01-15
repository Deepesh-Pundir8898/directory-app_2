import React from 'react'
import { useState } from 'react';

const RetriveInfo = () => {
    const [aadhaar, setAadhaar] = useState('');
    const [people, setPeople] = useState([]);
    const [notFound, setNotFound] = useState(false);
  
    const handleSearch = () => {
      const storedPeople = JSON.parse(localStorage.getItem('people')) || [];
      const foundPeople = storedPeople.filter((p) => p.aadhaar === aadhaar); // Use 'filter' to get all matching entries
      if (foundPeople.length > 0) {
        setPeople(foundPeople);
        setNotFound(false);
      } else {
        setNotFound(true);
        setPeople([]);
      }
    };
  
    return (
      <div  className='retriveInfo-container'>
        <h1>Retrieve Information</h1>
        <input
          type="text"
          value={aadhaar}
          onChange={(e) => setAadhaar(e.target.value)}
          placeholder="Enter Aadhaar Number"
        />
        <button onClick={handleSearch}>Search</button>
  
        {notFound && <p>No match found.</p>}
        {people.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Aadhaar Number</th>
                <th>Mobile Number</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {people.map((person, index) => (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.dob}</td>
                  <td>{person.aadhaar}</td>
                  <td>{person.mobile}</td>
                  <td>{person.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
}

export default RetriveInfo
