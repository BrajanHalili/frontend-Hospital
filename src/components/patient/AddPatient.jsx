import React from 'react'

const AddPatient = () => {
    return (
        <div className="">
            <form>
                <div className="d-flex flex-row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="date"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group col-md-3">
                        <select className="form-control custom-select">
                            <option>Sex</option>
                            <option>Female</option>
                            <option>Male</option>
                        </select>
                    </div>

                    <div className="col-md-1">
                        <button className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddPatient