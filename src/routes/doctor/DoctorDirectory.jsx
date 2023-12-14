import React from 'react'
import { NavLink } from 'react-router-dom'

import DoctorList from '../../components/doctor/DoctorList'

const DDirectory = () => {
    return (
        <div>
            <div class="btn btn-primary m-1">
                <NavLink className="nav-link" to="/doctors/add">new doctor +</NavLink>
            </div>
            <DoctorList />
        </div>
    )
}

export default DDirectory