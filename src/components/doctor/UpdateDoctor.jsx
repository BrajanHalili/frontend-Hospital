import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateDoctor = () => {
    const [doctor, setDoctor] = useState({
        name: '',
        dob: Date,
        sex: '',
        address: '',
        specialty: '',
        license: '',
    })
    let navigate = useNavigate();
    const state = useLocation();
    const handleBack = () => {
        navigate(`/doctors`);
    }

    useEffect(() => {
        async function getDoctor() {
            try {
                fetch('http://localhost:3006/doctor/' + state.state.id, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(response => {
                        setDoctor({
                            name: response.doctor_name,
                            dob: response.doctor_dob,
                            sex: response.doctor_sex,
                            address: response.doctor_address,
                            specialty: response.doctor_specialty,
                            license: response.doctor_license_number,
                        })
                    })
            }
            catch (error) {
                console.error('Error fetching doctor:', error);
            }
        }
        getDoctor();
    }, [state.state.id]);

    function handleChange(event) {
        const { name, value } = event.target;

        setDoctor(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    async function handleClick(event) {
        event.preventDefault();
        fetch('http://localhost:3006/doctor/update/' + state.state.id, {
            method: "PUT",
            body: JSON.stringify({
                name: doctor.name,
                dob: doctor.dob,
                sex: doctor.sex,
                address: doctor.address,
                specialty: doctor.specialty,
                license: doctor.license,
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
                    <input onChange={handleChange} className="form-control" name="name" value={doctor.name} autoComplete="off" placeholder="Doctor name" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input DOB" className="form-label">DOB</label>
                    <input onChange={handleChange} type="date" pattern="\d{4}-\d{2}-\d{2}" className="form-control" name="dob" value={doctor.dob} autoComplete="off" placeholder="Doctor dob" ></input>
                </div>

                <div className="form-group col-md-3">
                    <label for="Input Sex" className="form-label">Doctor Sex</label>

                    <select className="form-control custom-select" value={doctor.sex} onChange={handleChange} name="sex">
                        <option value={"Female"}>Female</option>
                        <option value={"Male"}>Male</option>
                        <option value={"Other"}>Other</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label for="Input Address" className="form-label">Doctor Address</label>
                    <input onChange={handleChange} className="form-control" name="address" value={doctor.address} autoComplete="off" placeholder="Doctor address" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input Specialty" className="form-label">Specialty</label>
                    <input onChange={handleChange} className="form-control" name="specialty" value={doctor.specialty} autoComplete="off" placeholder="Doctor specialty" ></input>
                </div>

                <div className="mb-3">
                    <label for="Input License" className="form-label">Doctor License</label>
                    <input onChange={handleChange} className="form-control" name="license" value={doctor.license} autoComplete="off" placeholder="Doctor license" ></input>
                </div>

                <button onClick={handleClick} type="submit" className="btn btn-primary">UPDATE DOCTOR</button>


            </form>
        </div>
    );

}

export default UpdateDoctor