import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom'

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
        navigate(`/patients`);
    }

    useEffect(() => {
        async function getPatient() {
            try {
                fetch('http://localhost:3006/doctor/' + state.state.id, {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(response => response.json())
                .then(response => {
                    //setDoctor({
                    //});
                })
            }
            catch (error) {
                console.error('Error fetching doctor:', error);
            }
        }
        getPatient();
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;

        setDoctor(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    //<button onClick={handleClick} type="submit" className="btn btn-primary">UPDATE DOCTOR</button>
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
                        <option>Select</option>
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

                

            </form>
            </div>
    );

}

export default UpdateDoctor