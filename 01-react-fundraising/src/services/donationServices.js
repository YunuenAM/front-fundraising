import axios from 'axios'
// import { config } from 'dotenv'

const BASE_URL = 'http://54.84.173.165/api/donations/'

// Service to get the total amount donated
const getTotalDonations = () => axios.get(`${BASE_URL}`)

// Service to post a donation
const postDonation = async (donationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  try {
    const response = await axios.post(BASE_URL, donationData, config)
    return response.data
  } catch (error) {
    console.log('el error es: ', error)
  }
}

const getAllDonations = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/alldonations`)
    return response // Return the entire response object
  } catch (error) {
    console.error('Error getting donations:', error)
    throw error // You can choose to handle the error at a higher level if needed
  }
}
export {
  getTotalDonations,
  postDonation,
  getAllDonations
//
}
