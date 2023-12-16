import { createSlice } from '@reduxjs/toolkit'

export const patientSlice = createSlice({
    name: 'patientData',
    initialState: {
        patientName: 'Initial Patient',
        patientId: 2,
    },
    reducers: {
        setPatientData: (state, action) => {
            state.patientName = action.payload.value;
            state.patientId = action.payload.key;
        },
    }
});

export const { setPatientData } = patientSlice.actions;

export const selectPatientData = (state) => {
    return {
        patientName: state.patientData.patientName,
        patientId: state.patientData.patientId,
    }
}


export default patientSlice.reducer