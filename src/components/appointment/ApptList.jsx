import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentList = () => {
    const [appointment, setAppointments] = useState([]);
    let navigate = useNavigate();

    // Fetch patients from your backend
    useEffect(() => {
        async function fetchAppointment() {
            try {
                const response = await fetch('http://localhost:3006/appointment');
                if (!response.ok) {
                    console.error('Server error:', response.status, response.statusText);
                    return;
                }
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        }
    
        fetchAppointment();
    }, []);

    const handleUpdate = (appointmentId) => {
        navigate(`/appointments/${appointmentId}`);
    };

    const handleDelete = async (appointmentID) => {
        try {
            const response = await fetch(`http://localhost:3006/appointment/${appointmentID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
    
            console.log("Appointment deleted successfully");
            setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment.id !== appointmentID));
        } catch (error) {
            console.error("Failed to delete the appointment:", error);
            // Handle error appropriately in the UI
        }
    };

    return (
        <div>
            <div className='list-group'>
                <table className="table table-hover">
                    <thead>
                        <tr className='table-primary'>
                            <th scope='col'>Patient</th>
                            <th scope='col'>Doctor</th>
                            <th scope='col'>Date</th>
                            <th scope='col'>Time</th>
                            <th scope='col'>Reason</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map(appointment => (
                            <tr key={appointment.id}>
                                <td>{appointment.patient_id}</td>
                                <td>{appointment.doctor_id}</td>
                                <td>{appointment.appointment_date}</td>
                                <td>{appointment.appointment_time}</td>
                                <td>{appointment.appointment_reason}</td>
                                <td>
                                    <button onClick={() => handleUpdate(appointment.id)} className="btn btn-warning">Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(appointment.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentList;
