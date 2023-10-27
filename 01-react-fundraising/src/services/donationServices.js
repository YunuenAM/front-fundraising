import axios from 'axios'

const BASE_URL = 'https://perfect-erin-goldfish.cyclic.app/api/donations/'

// Service to get the total amount donated
const getTotalDonations = () => axios.get(`${BASE_URL}`)

// Service to post a donation
const postDonation = (donationData) => axios.post(`${BASE_URL}`, donationData)

// Service to get the user and how much they've donated
const getAllDonations = () => axios.get(`${BASE_URL}/alldonations`)

export {
  getTotalDonations,
  postDonation,
  getAllDonations
}
