import React, { useState } from "react";

import { useNavigate } from 'react-router-dom'


const AddPatient = () => {
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(`/patients`);
    }

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
            .then(response => {console.log(response);
            })

        setPatient({
            name: '',
            dob: Date,
            sex: '',
            address: '',
            maritial_status: '',
            phone: 0,
            email: ''
        })

    }

    return (
        <div className="container">
            <button onClick={() => handleBack()} className="btn btn-warning">Go back</button>
            <h1>Enter New Patient</h1>
            <form>
                <div className="mb-3">
                    <label for="Input Name" className="form-label">Name</label>
                    <input onChange={handleChange} className="form-control" name="name" value={patient.name} autoComplete="off" placeholder="Patient name" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input DOB" className="form-label">DOB</label>
                    <input onChange={handleChange} className="form-control" name="dob" value={patient.dob} autoComplete="off" placeholder="Patient dob" ></input>
                </div>

                <div className="form-group col-md-3">
                    <label for="Input Sex" className="form-label">Patient Sex</label>

                    <select className="form-control custom-select" value={patient.sex} onChange={handleChange} name="sex">
                        <option>Select</option>
                        <option value={"Female"}>Female</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label for="Input Address" className="form-label">Patient Address</label>
                    <input onChange={handleChange} className="form-control" name="address" value={patient.address} autoComplete="off" placeholder="Patient address" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Marital Status" className="form-label">Marital Status</label>
                    <input onChange={handleChange} className="form-control" name="maritial_status" value={patient.maritial_status} autoComplete="off" placeholder="Patient maritial status" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Phone" className="form-label">Patient Phone</label>
                    <input onChange={handleChange} className="form-control" name="phone" value={patient.phone} autoComplete="off" placeholder="Patient phone" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Email" className="form-label">Patient Email</label>
                    <input onChange={handleChange} className="form-control" name="email" value={patient.email} autoComplete="off" placeholder="Patient email" ></input>
                </div>

                <button onClick={handleClick} type="submit" className="btn btn-primary">ADD PATIENT</button>

            </form>
        </div>
    );
}

export default AddPatient;