import { createSlice } from '@reduxjs/toolkit'

export const patientSlice = createSlice({
    name: 'patientData',
    initialState: {
        patientName: null,
        patientId: null,
    },
    reducers: {
        setPatientData: (state, action) => {
            state.patientName = action.payload[1];
            state.patientId = action.payload[0];
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