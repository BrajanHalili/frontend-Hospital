import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom'


const AddAppointment = () => {
    let navigate = useNavigate();

    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);


    useEffect(() => {
        async function fetchPatients() {
            try {
                const response = await fetch('http://localhost:3006/patient');
                if (!response.ok) {
                    console.error('Server error:', response.status, response.statusText);
                    return;
                }
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        }

        async function fetchDoctors() {
            try {
                const response = await fetch('http://localhost:3006/doctor');
                if (!response.ok) {
                    console.error('Server error:', response.status, response.statusText);
                    return;
                }
                const data = await response.json();
                setDoctors(data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        }

        fetchPatients();
        fetchDoctors();
    }, []);

    const handleBack = () => {
        navigate(`/appointments`);
    }

    const [appointment, setAppointment] = useState({
        patient_id: null,
        doctor_id: null,
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

    function handleChangeSelect(event) {
        const { name, key, value } = event.target;


    }

    async function handleClick(event) {
        event.preventDefault();
        fetch('http://localhost:3006/appointment/add', {
            method: "POST",
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
            .then(response => {
                console.log(response);
            })

        setAppointment({
            patient_id: null,
            doctor_id: null,
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
                    <label for="Input Patient Name" className="form-label">Patient Name</label>
                    <select className="form-control custom-select" value={appointment.patient_name} onChange={handleChange} name="patient_name">
                        {patients.map(patient => (
                            <option key={patient.id} value={patient.patient_name}>{patient.patient_name}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label for="Input Doctors Name" className="form-label">Doctor Name</label>
                    <select className="form-control custom-select" value={appointment.doctor_name} onChange={handleChangeSelect} name="doctor_name">
                        {doctors.map(doctor => (
                            <option key={doctor.id} value={doctor.doctor_name}>{doctor.doctor_name}</option>
                        ))}
                    </select>
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