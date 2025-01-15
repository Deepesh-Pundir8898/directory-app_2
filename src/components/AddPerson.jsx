import React from 'react'
import { useState , useEffect } from 'react';

const AddPerson = () => {
    const [people, setPeople] = useState([]);
    const [formData, setFormData] = useState({
      name: '',
      dob: '',
      aadhaar: '',
      mobile: '',
      age: '',
    });
  
    // Calculate age based on DOB
    const calculateAge = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    };
  
    // Load saved people from localStorage on component mount
    useEffect(() => {
      const savedPeople = JSON.parse(localStorage.getItem('people')) || [];
      setPeople(savedPeople);
    }, []);
  
    // Handle adding a new row
    const handleAddRow = () => {
      if (validateInputs()) {
        const newPerson = { ...formData, age: calculateAge(formData.dob), isSaved: false };
        const updatedPeople = [...people, newPerson];
        setPeople(updatedPeople);
        localStorage.setItem('people', JSON.stringify(updatedPeople)); // Save to localStorage
        setFormData({ name: '', dob: '', aadhaar: '', mobile: '', age: '' });
      }
    };
  
    // Handle saving the row to localStorage and toggling button display
    const handleSave = (index) => {
      const updatedPeople = [...people];
      updatedPeople[index].isSaved = true; // Mark as saved
      setPeople(updatedPeople);
      localStorage.setItem('people', JSON.stringify(updatedPeople)); // Update localStorage
    };
  
    // Handle deleting a row from the table and localStorage
    const handleDelete = (index) => {
      const updatedPeople = [...people];
      updatedPeople.splice(index, 1);
      setPeople(updatedPeople);
      localStorage.setItem('people', JSON.stringify(updatedPeople)); // Update localStorage
    };
  
    // Validate Aadhaar (12 digits), Mobile (10 digits), and required inputs
    const validateInputs = () => {
      if (!formData.name || !formData.dob || !formData.aadhaar || !formData.mobile) {
        alert('All fields are required.');
        return false;
      }
      if (formData.aadhaar.length !== 12) {
        alert('Aadhaar number must be exactly 12 digits.');
        return false;
      }
      if (formData.mobile.length !== 10) {
        alert('Mobile number must be exactly 10 digits.');
        return false;
      }
      return true;
    };
  
    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    return (
      <div className='add-person-container'>
        <h1>Add New Person</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhaar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
              <th>Actions</th>
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
                <td>
                  {person.isSaved ? (
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  ) : (
                    <>
                      <button onClick={() => handleSave(index)}>Save</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter name"
                  required
                />
              </td>
              <td>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  name="aadhaar"
                  value={formData.aadhaar}
                  onChange={handleInputChange}
                  placeholder="12-digit Aadhaar"
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="10-digit Mobile"
                  required
                />
              </td>
              <td>{formData.dob ? calculateAge(formData.dob) : ''}</td>
              <td>
                <button onClick={handleAddRow}>Add Row</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default AddPerson
