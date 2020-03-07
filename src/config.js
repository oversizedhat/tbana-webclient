'use strict'
export default {
  apiEndPoint: 'https://ldfdlzc7ve.execute-api.eu-north-1.amazonaws.com/v1/trains/departures',
  //apiEndPoint: 'http://localhost:3000/trains/departures',
  mode:"prod", //apply query param mode=dev to run against mock data
  updateIntervalMs: 1000
}