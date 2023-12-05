import React from 'react'
// import HospitalAppt from '../apis/HospitalAppt'

const ApptList = () => {

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

    return (
        <div className=''>
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
                        <tr>
                            <td>John Doe</td>
                            <td>John Doe</td>
                            <td>2023-12-12</td>
                            <td>11:30 AM</td>
                            <td>Cardiology consultation</td>
                            <td>
                                <button className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td>John Doe</td>
                            <td>2023-12-12</td>
                            <td>11:30 AM</td>
                            <td>Cardiology consultation</td>
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

export default ApptList