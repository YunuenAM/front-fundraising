import axios from 'axios'

const BASE_URL = 'https://perfect-erin-goldfish.cyclic.app/api/users'

// const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getSingleUserService = (id) => axios.get(`${BASE_URL}/users/${id}`)
const token = localStorage.getItem('token')
console.log(token)

export {
//   registerUserService,
  loginUserService,
  getSingleUserService
}
