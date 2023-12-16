import { configureStore } from '@reduxjs/toolkit'
import patientDataReducer from './PatientSlice';
import doctorDataReducer from './DoctorSlice';
import updateDoctorDataReducer from './UpdateDoctorSlice'


export default configureStore({
    reducer: {
        patientData: patientDataReducer,
        doctorData: doctorDataReducer,
        updateDoctorData: updateDoctorDataReducer,
    }
})