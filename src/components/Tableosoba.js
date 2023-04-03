import React, { useState, useEffect } from 'react';
import { Table } from '@mantine/core';
import data from './data.json';

function TableOsoba() {
  const [osoby, setOsoby] = useState([]);

  useEffect(() => {
    setOsoby(data.osoby);
  }, []);

  const rows = osoby.map((element) => (
    <tr key={element.id}>
      <td>{element.id}</td>
      <td>{element.jmeno}</td>
      <td>{element.prijmeni}</td>
      <td>{element.adresaID}</td>
      <td>{element.studentID}</td>
    </tr>
  ));

  return (
    <Table horizontalSpacing="lg" verticalSpacing="sm" fontSize="md">
      <thead>
        <tr>
          <th>ID</th>
          <th>Jméno</th>
          <th>Přijmení</th>
          <th>Adresa ID</th>
          <th>Student ID</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  )
}

export default TableOsoba;
