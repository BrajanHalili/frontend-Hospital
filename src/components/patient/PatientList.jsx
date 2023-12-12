import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientList = () => {
    const [patients, setPatients] = useState([]);
    let navigate = useNavigate();

    // Fetch patients from your backend
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
    
        fetchPatients();
    }, []);

    const handleUpdate = (patientId) => {
        navigate(`/patients/${patientId}`);
    };

    const handleDelete = async (patientId) => {
        try {
            const response = await fetch(`http://localhost:3006/patient/${patientId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
    
            console.log("Patient deleted successfully");
            setPatients(prevPatients => prevPatients.filter(patient => patient.id !== patientId));
        } catch (error) {
            console.error("Failed to delete the patient:", error);
            // Handle error appropriately in the UI
        }
    };

    return (
        <div>
            <div className='list-group'>
                <table className="table table-hover">
                    <thead>
                        <tr className='table-primary'>
                            <th scope='col'>Name</th>
                            <th scope='col'>DOB</th>
                            <th scope='col'>Sex</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Marital Status</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map(patient => (
                            <tr key={patient.id}>
                                <td>{patient.patient_name}</td>
                                <td>{patient.patient_dob}</td>
                                <td>{patient.patient_sex}</td>
                                <td>{patient.patient_address}</td>
                                <td>{patient.patient_maritial_status}</td>
                                <td>{patient.patient_phone}</td>
                                <td>{patient.patient_email}</td>
                                <td>
                                    <button onClick={() => handleUpdate(patient.id)} className="btn btn-warning">Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(patient.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PatientList;
