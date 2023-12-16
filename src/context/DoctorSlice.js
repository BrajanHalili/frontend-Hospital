import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    doctorName: 'Initial Doc',
    doctorId: 4,
};

export const doctorSlice = createSlice({
    name: 'doctorData',
    initialState,
    reducers: {
        setDoctorData: (state, action) => {
            state.doctorName = action.payload.value;
            state.doctorId = action.payload.key;
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