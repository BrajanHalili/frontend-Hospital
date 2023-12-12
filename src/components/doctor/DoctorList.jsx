import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
    const [doctors, setDoctors] = useState([]);
    let navigate = useNavigate();

    // Fetch patients from your backend
    useEffect(() => {
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
                console.error('Error fetching patients:', error);
            }
        }
    
        fetchDoctors();
    }, []);

    const handleUpdate = (doctorId) => {
        navigate(`/doctors/${doctorId}`);
    };

    const handleDelete = async (doctorId) => {
        try {
            const response = await fetch(`http://localhost:3006/doctor/${doctorId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
    
            console.log("Doctor deleted successfully");
            setDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.id !== doctorId));
        } catch (error) {
            console.error("Failed to delete the doctor:", error);
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
                            <th scope='col'>Sex</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Specialty</th>
                            <th scope='col'>License Number</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map(doctor => (
                            <tr key={doctor.id}>
                                <td>{doctor.doctor_name}</td>
                                <td>{doctor.doctor_dob}</td>
                                <td>{doctor.doctor_sex}</td>
                                <td>{doctor.doctor_address}</td>
                                <td>{doctor.doctor_specialty}</td>
                                <td>{doctor.doctor_license_number}</td>
                                <td>
                                    <button onClick={() => handleUpdate(doctor.id)} className="btn btn-warning">Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(doctor.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DoctorList;
