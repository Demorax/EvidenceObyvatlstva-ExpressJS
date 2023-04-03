import React, { useState } from 'react';
import axios from 'axios';

function Form() {
  const [formData, setFormData] = useState({
    id: null,
    jmeno: '',
    prijmeni: '',
    adresaID: null,
    studentID: null
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:4000/updateosoba/${formData.id}`, formData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="number" name="id" value={formData.id} onChange={handleChange} />
      </label>
      <label>
        jmeno:
        <input type="text" name="jmeno" value={formData.jmeno} onChange={handleChange} />
      </label>
      <label>
        prijmeni:
        <input type="text" name="prijmeni" value={formData.prijmeni} onChange={handleChange} />
      </label>
      <label>
        adresaId:
        <input type="number" name="adresaId" value={formData.adresaID} onChange={handleChange} />
      </label>
      <label>
        studentId:
        <input type="number" name="studentId" value={formData.studentID} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
