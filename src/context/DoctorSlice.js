import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorName: null,
    doctorId: null,
};

export const doctorSlice = createSlice({
    name: 'doctorData',
    initialState,
    reducers: {
        setDoctorData: (state, action) => {
            state.doctorName = action.payload[1];
            state.doctorId = action.payload[0];
        },
    }
});

export const { setDoctorData } = doctorSlice.actions;

export const selectDoctorData = (state) => {
    return {
        doctorName: state.doctorData.doctorName,
        doctorId: state.doctorData.doctorId,
    }
}


export default doctorSlice.reducer