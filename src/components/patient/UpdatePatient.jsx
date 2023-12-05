import React from 'react'
import { useNavigate } from 'react-router-dom'


const UpdatePatient = () => {
    let navigate = useNavigate();

    const handleBack = () => {
        navigate(`/patients`);
    }

    return (
        <div className='container'>
            <button onClick={() => handleBack()} className="btn btn-warning">Go back</button>

            <form>
                <div class="mb-3">
                    <label for="Input Name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="Input Name" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" className="form-label">DOB</label>
                    <input type="date" className="form-control" id="Input DOB" />
                </div>
                <div>
                    <label for="Input Name" className="form-label">Sex</label>

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePatient