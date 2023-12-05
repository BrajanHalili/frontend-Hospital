import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <h1 className="font-weight-light display-1 text-center">Hospital Appointments Manager</h1>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/patients" exact>Patients</NavLink>                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/appointments">Appointments</NavLink>
                            </li>
                        </ul>
                        <div className="col-md-1">
                            <NavLink className="nav-link" to="/patients/add">Add new Patient</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>

    )
}

export default Layout