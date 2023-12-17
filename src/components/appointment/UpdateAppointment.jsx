import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom'
import { selectPatientData, setPatientData } from '../../context/UpdatePatientSlice';
import { selectDoctorUpdate, setDoctorUpdate } from '../../context/UpdateDoctorSlice';
import { useSelector, useDispatch } from 'react-redux';

const UpdateAppointment = () => {
    let navigate = useNavigate();

    const [patients, setPatients] = useState([]);
    const [doctors, setDoctors] = useState([]);

    const patientData = useSelector(selectPatientData);
    const doctorData = useSelector(selectDoctorUpdate)

    const [appointment, setAppointment] = useState({
        doa: Date,
        time: '',
        reason: '',
    })
    const dispatch = useDispatch();
    const state = useLocation();
    const handleBack = () => {
        dispatch(setPatientData([null, ""]));
        dispatch(setDoctorUpdate([null, ""]));
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
                        doa: response.appointment_date,
                        time: response.appointment_time,
                        reason: response.appointment_reason
                    });
                    let patientArr = [response.patient_id, response.patient_name];
                    dispatch(setPatientData(patientArr));

                    let doctorArr = [response.doctor_id, response.doctor_name];
                    dispatch(setDoctorUpdate(doctorArr));
                })
            }
            catch (error) {
                console.error('Error fetching patient:', error);
            }
        }
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
        getAppointment();
    }, [state.state.id, dispatch]);


    function handleChange(event) {
        const { name, value } = event.target;

        setAppointment(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleChangePatient(event) {
        const values = event.target.value.split(',');
        console.log(values[0]);
        console.log(values[1]);
        dispatch(setPatientData(values));
    }

    function handleChangeDoctor(event) {
        const values = event.target.value.split(',');
        console.log(values[0]);
        console.log(values[1]);
        dispatch(setDoctorUpdate(values));
    }

    async function handleClick(event) {
        event.preventDefault();
        fetch('http://localhost:3006/appointment/update/' + state.state.id, {
            method: "PUT",
            body: JSON.stringify({
                patient_id: patientData.patientId,
                doctor_id: doctorData.doctorId,
                doctor_name: doctorData.doctorName,
                patient_name: patientData.patientName,
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
                    <label for="Input Patient Name" className="form-label">Patient Name</label>
                    <select className="form-control custom-select" value={[patientData.patientId, patientData.patientName]} onChange={handleChangePatient} name="patient_name">
                        <option></option>
                        {patients.map(patient => (
                            <option key={patient.id} value={[patient.id, patient.patient_name]} >{patient.patient_name}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label for="Input Doctors Name" className="form-label">Doctor Name</label>
                    <select className="form-control custom-select" key={doctorData.doctorId} value={[doctorData.doctorId, doctorData.doctorName]} onChange={handleChangeDoctor} name="doctor_name">
                        <option></option>
                        {doctors.map(doctor => (
                            <option key={doctor.id} value={[doctor.id, doctor.doctor_name]} >{doctor.doctor_name}</option>
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
                <button onClick={handleClick} type="submit" className="btn btn-primary">UPDATE Appointment</button>
        </div>
    )
}

export default UpdateAppointment