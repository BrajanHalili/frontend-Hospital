import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom'

const UpdateAppointment = () => {
    const [appointment, setAppointment] = useState({
        patient_id: null,
        doctor_id: null,
        doctor_name: '',
        patient_name: '',
        doa: Date,
        time: '',
        reason: '',
    })
    let navigate = useNavigate();
    const state = useLocation();
    const handleBack = () => {
        navigate(`/appointments`);
    }

    useEffect(() => {
        async function getAppointment() {
            try {
                fetch('http://localhost:3006/appointment/' + state.state.id, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(response => {
                    setAppointment({
                        patient_id: response.patient_id,
                        doctor_id: response.doctor_id,
                        doctor_name: response.doctor_name,
                        patient_name: response.patient_name,
                        doa: response.appointment_date,
                        time: response.appointment_time,
                        reason: response.appointment_reason
                    });
                })
            }
            catch (error) {
                console.error('Error fetching patient:', error);
            }
        }
        getAppointment();
    }, [state.state.id]);


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
        fetch('http://localhost:3006/appointment/update/' + state.state.id, {
            method: "PUT",
            body: JSON.stringify({
                patient_id: appointment.patient_id,
                doctor_id: appointment.doctor_id,
                doctor_name: appointment.doctor_name,
                patient_name: appointment.patient_name,
                appointment_date: appointment.doa,
                appointment_time: appointment.time,
                appointment_reason: appointment.reason
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                console.log(response.status);
            })
    }

    return (
        <div className='container'>
            <button onClick={() => handleBack()} className="btn btn-warning">Go back</button>
            <div className="mb-3">
                    <label for="Input Doctor ID" className="form-label">Doctor ID</label>
                    <input onChange={handleChange} className="form-control" name="doctor_id" value={appointment.doctor_id} autoComplete="off" placeholder="Doctor ID" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Doctor Name" className="form-label">Doctor Name</label>
                    <input onChange={handleChange} className="form-control" name="doctor_name" value={appointment.doctor_name} autoComplete="off" placeholder="Doctor name" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Patient ID" className="form-label">Patient ID</label>
                    <input onChange={handleChange} className="form-control" name="patient_id" value={appointment.patient_id} autoComplete="off" placeholder="Patient ID" ></input>
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
                <button onClick={handleClick} type="submit" className="btn btn-primary">UPDATE Appointment</button>
        </div>
    )
}

export default UpdateAppointment