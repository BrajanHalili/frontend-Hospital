import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PatientDirectory from "./routes/patient/PatientDirectory";
import DoctorDirectory from "./routes/doctor/DoctorDirectory";
import ApptDirectory from "./routes/appointment/ApptDirectory";
import StartPage from "./routes/StartPage";



import PatientDetails from "./routes/patient/PatientDetails";
import DoctorDetails from "./routes/doctor/DoctorDetails";
import ApptDetails from "./routes/appointment/ApptDetails";


import Layout from "./components/Layout";
import AddPatientPage from "./routes/patient/AddPatientPage";
import AddDoctorPage from "./routes/doctor/AddDoctorPage";

import AddApptPage from "./routes/appointment/AddApptPage";






const App = () => {

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Layout />}>
                        <Route index element={<StartPage />} />
                        <Route path="/patients" element={<PatientDirectory />} />
                        <Route path="/doctors" element={<DoctorDirectory />} />
                        <Route path="/appointments" element={<ApptDirectory />} />
                    </Route>
                    <Route exact path="/patients/:id" element={<PatientDetails />} />
                    <Route exact path="/doctors/:id" element={<DoctorDetails />} />
                    <Route exact path="/appointments/:id" element={<ApptDetails />} />
                    <Route exact path="/patients/add" element={<AddPatientPage />} />
                    <Route exact path="/doctors/add" element={<AddDoctorPage />} />
                    <Route exact path="/appointments/add" element={<AddApptPage />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App;