import React, {useState} from 'react';
import './App.css';
import Form from './project/project2';


function App() {

const [employees, setEmployees] = useState([]);

const addEmployeeHandler = (employee) => {
  setEmployees([...employees, employee]);
}

  return (
    <div className="App">
      <Form  addEmployeeHandler={addEmployeeHandler} employees={employees}/>
    </div>
  );
}

export default App;