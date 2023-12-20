# Getting Started with Hospital Scheduler App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## About
The Hospital Scheduler App is a console that allows a Hospital Admin to add patients, doctors, and manage appointments for Hospital entities. The Hospital Admin can also update and delete Patient and Doctor profiles, as well as update and delete appointments. 

The Hospital Scheduler app also features a medication search tool that allows a medical professional to search marketplace available medications using their generic drug name or brand name.

Our front end is build with React, React Router, and React Redux
Our backend is build with Postgres, Express, Sequelize, and Node

### UI (React)
*Create a topbar or sidebar component that is present throughout the app
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/Layout.jsx#L1-L31
  
* Create 3 or more additional components
* https://github.com/BrajanHalili/frontend-final/tree/main/src/components
  
* 1 or more components should take text-based user input
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/search/SearchBar.js#L10-L16
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/AddPatient.jsx#L68-L111
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/UpdatePatient.jsx#L81-L131
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/AddDoctor.jsx#L61-L108
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/UpdateDoctor.jsx#L77-L125
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/AddAppt.jsx#L122-L171

* 1 or more components should display data representing a single instance from a model
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L30-L55
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/UpdateDoctor.jsx#L20-L45
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/UpdatePatient.jsx#L22-L48
  
* Clicking on one of these components should show additional information related to that instance
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/PatientList.jsx#L80
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/PatientList.jsx#L27-L29
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/UpdatePatient.jsx#L81-L131
  
* 1 or more components should display data based on store state
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L7-L14
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L30-L55

* Components should enable to user to perform CRUD operations on the backend models
* appt
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/AddAppt.jsx#L93-L110
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/ApptList.jsx#L31-L38
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L111-L132
* doctor
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/AddDoctor.jsx#L33-L49
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/DoctorList.jsx#L31-L50
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/UpdateDoctor.jsx#L58-L75
* patient
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/AddPatient.jsx#L34-L50
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/PatientList.jsx#L31-L50
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/UpdatePatient.jsx#L62-L79

### Client-Side Routing (React Router)
* Create 2 our more routes that display different components based on the URL, that are accessible from the navbar/topbar
* Use dynamic segments to display appropriate info based on the segment info Ex: Appropriate task is displayed when the URL matches `/tasks/:taskId`
* the following shows both:
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/App.jsx#L1-L56
### State Management (Redux)
* Create a store and a reducer to handle incoming actions
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/context/AppointmentStore.js#L1-L15

* Create 1 or more action creators to create actions based on inputs
* * https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/context/DoctorSlice.js#L1-L29
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/context/PatientSlice.js#L1-L27
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/context/UpdateDoctorSlice.js#L1-L29
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/context/UpdatePatientSlice.js#L1-L27

* Update store state using dispatch and actions
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L21-L27
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L45-L49
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L13-L14

* Reflect updates to the state in the frontend UI
### API Calls (External and to Backend)
* Backend: Using the backend routes, should be able to perform CRUD operations on database models
* * appt
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/AddAppt.jsx#L93-L110
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/ApptList.jsx#L31-L38
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/appointment/UpdateAppointment.jsx#L111-L132
* doctor
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/AddDoctor.jsx#L33-L49
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/DoctorList.jsx#L31-L50
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/doctor/UpdateDoctor.jsx#L58-L75
* patient
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/AddPatient.jsx#L34-L50
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/PatientList.jsx#L31-L50
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/patient/UpdatePatient.jsx#L62-L79
  
* External: Should make 2 or more External API calls
* https://github.com/BrajanHalili/frontend-final/blob/e07ad00eb8925fdd1d90dfe5589a1e0bb3d6db31/src/components/search/Results.js#L11-L21
