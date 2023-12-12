import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

import ApptList from '../../components/appointment/ApptList'

const ADirectory = () => {
    return (
        <div>
            <div class="btn btn-primary m-1">
                <NavLink className="nav-link" to="/appointments/add">new appointment +</NavLink>
            </div>
            <ApptList />
        </div>
    )
}

export default ADirectory