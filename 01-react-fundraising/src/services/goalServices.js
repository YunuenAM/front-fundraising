import axios from 'axios'

const BASE_URL = 'http://54.84.173.165/api/donations/'

// Service to get the user and how much they've donated
const getAllDonations = () => axios.get(`${BASE_URL}/alldonations`)

export { getAllDonations }
