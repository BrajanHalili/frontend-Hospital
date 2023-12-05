import React, { useState, createContext } from "react";

export const PatientsContext = createContext();

export const PatientsContextProvider = props => {
    const [patients, setPatients] = useState([])

    return (
        <PatientsContext.Provider value={{ patients, setPatients }}>
            {props.children}
        </PatientsContext.Provider>
    )
}