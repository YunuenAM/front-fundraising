import axios from 'axios'

const BASE_URL = 'https://perfect-erin-goldfish.cyclic.app/api/donations/'

// Service to get the user and how much they've donated
const getAllDonations = () => axios.get(`${BASE_URL}/alldonations`)

export { getAllDonations }
