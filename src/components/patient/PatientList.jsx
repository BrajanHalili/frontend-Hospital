import React from 'react'
import { useNavigate } from 'react-router-dom'
// import HospitalAppt from '../apis/HospitalAppt'

const PatientList = () => {

    let navigate = useNavigate();

    // useEffect(() => {
    //     async function fetchData() {
    //         // You can await here
    //         try {
    //             const response = await HospitalAppt.get("/");
    //             console.log(response);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //         // ...
    //     }
    //     fetchData();
    // }, []);

    const handleUpdate = () => {
        navigate(`/patients/id`);
    }

    return (
        <div className=''>
            <div className='list-group'>
                <table className="table table-hover">
                    <thead>
                        <tr className='table-primary'>
                            <th scope='col'>Name</th>
                            <th scope='col'>DOB</th>
                            <th scope='col'>Sex</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>2021-02-05</td>
                            <td>Male</td>
                            <td>123 Place St, New York, NY 12345</td>
                            <td>1234567890</td>
                            <td>John@doe.com</td>
                            <td>
                                <button onClick={() => handleUpdate()} className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>2021-02-05</td>
                            <td>Male</td>
                            <td>123 Place St, New York, NY 12345</td>
                            <td>1234567890</td>
                            <td>John@doe.com</td>
                            <td>
                                <button className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PatientList