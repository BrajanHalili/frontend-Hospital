import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorName: null,
    doctorId: null,
};

export const updateDoctorSlice = createSlice({
    name: 'updateDoctorData',
    initialState,
    reducers: {
        setDoctorUpdate: (state, action) => {
            state.doctorName = action.payload[1];
            state.doctorId = action.payload[0];
        },
    }
});

export const { setDoctorUpdate } = updateDoctorSlice.actions;

export const selectDoctorUpdate = (state) => {
    return {
        doctorName: state.updateDoctorData.doctorName,
        doctorId: state.updateDoctorData.doctorId,
    }
}


export default updateDoctorSlice.reducer