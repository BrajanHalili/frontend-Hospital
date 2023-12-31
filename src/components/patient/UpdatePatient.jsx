import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'


const UpdatePatient = () => {
    const [patient, setPatient] = useState({
        name: '',
        dob: Date,
        sex: '',
        address: '',
        maritial_status: '',
        phone: '',
        email: ''
    });
    const [appointment, setAppointments] = useState([]);
    let navigate = useNavigate();
    const state = useLocation();
    const handleBack = () => {
        navigate(`/patients`);
    }

    useEffect(() => {
        async function getPatient() {
            try {
                fetch('http://localhost:3006/patient/' + state.state.id, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(response => {
                        setPatient({
                            name: response.patient.patient_name,
                            dob: response.patient.patient_dob,
                            sex: response.patient.patient_sex,
                            address: response.patient.patient_address,
                            maritial_status: response.patient.patient_maritial_status,
                            phone: response.patient.patient_phone,
                            email: response.patient.patient_email
                        });
                        setAppointments(response.apptdata);
                    })
            }
            catch (error) {
                console.error('Error fetching patient:', error);
            }
        }
        getPatient();
    }, [state.state.id]);


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
        fetch('http://localhost:3006/patient/update/' + state.state.id, {
            method: "PUT",
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
    }

    return (
        <div className='container'>
            <button onClick={() => handleBack()} className="btn btn-warning">Go back</button>

            <form>
                <div className="mb-3">
                    <label for="Input Name" className="form-label">Name</label>
                    <input onChange={handleChange} className="form-control" name="name" value={patient.name} autoComplete="off" placeholder="Patient name"></input>
                </div>

                <div className="mb-3">
                    <label for="Input DOB" className="form-label">DOB</label>
                    <input onChange={handleChange} type="date" pattern="\d{4}-\d{2}-\d{2}" className="form-control" name="dob" value={patient.dob} autoComplete="off" placeholder="Patient dob" ></input>
                </div>

                <div className="form-group col-md-3">
                    <label for="Input Sex" className="form-label">Patient Sex</label>

                    <select className="form-control custom-select" value={patient.sex} onChange={handleChange} name="sex">
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
            </form>
            <button onClick={handleClick} type="submit" className="btn btn-primary">UPDATE PATIENT</button>

            <div className='list-group'>
                <h2 className='text-center'>Appointments for this patient</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className='table-primary'>
                            <th scope='col'>Patient ID</th>
                            <th scope='col'>Patient</th>
                            <th scope='col'>Doctor ID</th>
                            <th scope='col'>Doctor</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Time</th>
                            <th scope='col'>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment?.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.patient_id}</td>
                                <td>{appointment.patient_name}</td>
                                <td>{appointment.doctor_id}</td>
                                <td>{appointment.doctor_name}</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.appointment_time}</td>
                                <td>{appointment.appointment_reason}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpdatePatient