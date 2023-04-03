import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableOsoba from './components/Tableosoba';
import Form from './components/Form';
import UpdateForm from './components/UpdateForm';
function App() {
  return (
    <div className="App">
      <div className="App-header">
      <TableOsoba />
      <Form />
      <h1>Update form</h1>
      <UpdateForm />
      </div>
    </div>
  );
}

export default App;
