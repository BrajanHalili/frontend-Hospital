//const React = require('react') 
//const useState = require('react') 
import React, { useState } from "react";
import axios from "axios";
//const axios = require('axios')

function App() {

  // In context folder
  const [patient, setPatient] = useState({
    name: '',
    dob: Date,
    sex: '',
    address: '',
    maritial_status: '',
    phone: 0,
    email: ''
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setPatient(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  async function handleClick(event) {
    event.preventDefault();
    const newPatient = {
      name: patient.name,
      dob: patient.dob,
      sex: patient.sex,
      address: patient.address,
      maritial_status: patient.maritial_status,
      phone: patient.phone,
      email: patient.email
    }
    fetch('http://localhost:3006/patient/add', {
      method: "POST",
      body: JSON.stringify({
        name: patient.name,
        dob: patient.dob,
        sex: patient.sex,
        address: patient.address,
        maritial_status: patient.maritial_status,
        phone: patient.phone,
        email: patient.email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    //console.log(newPatient);
    /*await axios.post("http://localhost:3006/patient/add", JSON.stringify({
      name: patient.name,
      dob: patient.dob,
      sex: patient.sex,
      address: patient.address,
      maritial_status: patient.maritial_status,
      phone: patient.phone,
      email: patient.email
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data);
      });
      fetch("http://localhost:3006/patient/add",{
        method: "POST",
        body: JSON.stringify({
          name: patient.name,
          dob: patient.dob,
          sex: patient.sex,
          address: patient.address,
          maritial_status: patient.maritial_status,
          phone: patient.phone,
          email: patient.email
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })*/
  }

  return (
    <div>
      <h1>Enter New Patient</h1>
      <form>
        <div>
          <input onChange={handleChange} name="name" value={patient.name} autoComplete="off" placeholder="Patient name" ></input>
        </div>

        <div>
          <input onChange={handleChange} name="dob" value={patient.dob} autoComplete="off" placeholder="Patient dob" ></input>
        </div>

        <div className="form-group col-md-3">
          <select className="form-control custom-select">
            <option>Sex</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <input onChange={handleChange} name="address" value={patient.address} autoComplete="off" placeholder="Patient address" ></input>
        </div>

        <div>
          <input onChange={handleChange} name="maritial_status" value={patient.maritial_status} autoComplete="off" placeholder="Patient maritial status" ></input>
        </div>

        <div>
          <input onChange={handleChange} name="phone" value={patient.phone} autoComplete="off" placeholder="Patient phone" ></input>
        </div>

        <div>
          <input onChange={handleChange} name="email" value={patient.email} autoComplete="off" placeholder="Patient email" ></input>
        </div>

        <button onClick={handleClick}> ADD PATIENT</button>
      </form>
    </div>
  );
}

export default App;
