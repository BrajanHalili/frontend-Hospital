import React, { useState } from "react";

import { useNavigate } from 'react-router-dom'


const AddAppointment = () => {
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(`/appointments`);
    }

    const [appointment, setAppointment] = useState({
        doctor_name: '',
        patient_name: '',
        doa: Date,
        time: '',
        reason: '',
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setAppointment(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    async function handleClick(event) {
        event.preventDefault();
        fetch('http://localhost:3006/appointment/add', {
            method: "POST",
            body: JSON.stringify({
                doctor_name: appointment.doctor_name,
                patient_name: appointment.patient_name,
                doa: appointment.doa,
                time: appointment.time,
                reason: appointment.reason
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                console.log(response);
            })

        setAppointment({
            doctor_name: '',
            patient_name: '',
            doa: Date,
            time: '',
            reason: '',
        })

    }

    return (
        <div className="container">
            <button onClick={() => handleBack()} className="btn btn-warning">Go back</button>
            <h1>Enter New Appointment</h1>
            <form>
                <div className="mb-3">
                    <label for="Input Doctor Name" className="form-label">Doctor Name</label>
                    <input onChange={handleChange} className="form-control" name="doctor_name" value={appointment.doctor_name} autoComplete="off" placeholder="Doctor name" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Patient Name" className="form-label">Patient Name</label>
                    <input onChange={handleChange} className="form-control" name="patient_name" value={appointment.patient_name} autoComplete="off" placeholder="Patient name" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input DOA" className="form-label">DOA</label>
                    <input onChange={handleChange} type="date" pattern="\d{4}-\d{2}-\d{2}" className="form-control" name="doa" value={appointment.doa} autoComplete="off" placeholder="Appointment doa" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Appt Time" className="form-label">Appointment Time</label>
                    <input onChange={handleChange} type="time" className="form-control" name="time" value={appointment.time} autoComplete="off" placeholder="Appointment time" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Appt Reason" className="form-label">Appointment Reason</label>
                    <input onChange={handleChange} className="form-control" name="reason" value={appointment.reason} autoComplete="off" placeholder="Appointment reason" ></input>
                </div>


                <button onClick={handleClick} type="submit" className="btn btn-primary">ADD APPOINTMENT</button>

            </form>
        </div>
    );
}

export default AddAppointment;