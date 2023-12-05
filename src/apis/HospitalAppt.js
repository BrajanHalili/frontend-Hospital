import axios from "axios";
// const axios = require('axios/dist/browser/axios.cjs');
// const axios = require('axios');



export default axios.create({
    baseURL: "https://localhost:3005/patients"
})