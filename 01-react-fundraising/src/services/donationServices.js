import axios from 'axios'
// import { config } from 'dotenv'

const BASE_URL = 'https://perfect-erin-goldfish.cyclic.app/api/donations/'

// Service to get the total amount donated
// const getTotalDonations = () => axios.get(`${BASE_URL}`)

// Service to post a donation
const postDonation = async (donationData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  console.log(donationData)
  console.log(config)
  try {
    const response = await axios.post(BASE_URL, donationData, config)
    return response.data
  } catch (error) {
    console.log('el error es: ', error)
  }
}

// Service to get the user and how much they've donated
// const getAllDonations = () => axios.get(`${BASE_URL}/alldonations`)

export {
  // getTotalDonations,
  postDonation
//
}
