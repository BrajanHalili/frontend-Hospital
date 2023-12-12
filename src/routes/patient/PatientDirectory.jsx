import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import PatientList from '../../components/patient/PatientList'

const PDirectory = () => {
    return (
        <div>
            <div class="btn btn-primary m-1">
                <NavLink className="nav-link" to="/patients/add">new patient +</NavLink>
            </div>
            <PatientList />
        </div>
    )
}

export default PDirectory