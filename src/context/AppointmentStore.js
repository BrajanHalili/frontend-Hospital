import { configureStore } from '@reduxjs/toolkit'
import patientDataReducer from './PatientSlice';
import doctorDataReducer from './DoctorSlice';


export default configureStore({
    reducer: {
        patientData: patientDataReducer,
        doctorData: doctorDataReducer,
    }
})