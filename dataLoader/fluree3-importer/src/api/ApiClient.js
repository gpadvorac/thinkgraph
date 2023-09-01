const axios = require('axios');

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: 'http://localhost:58090/fluree',
});

module.exports = api;
