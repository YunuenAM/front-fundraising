import React, { useState, useEffect } from 'react'
import { getAllDonations } from '../../services/donationServices'
import DonorCard from '../DonationCard/Index'
import './donorwall.scss'

const DonorWall = () => {
  const [donors, setDonors] = useState([])

  const fetchDonations = () => {
    getAllDonations()
      .then((response) => {
        setDonors(response.data)
      })
      .catch((error) => console.error(error))
  }

  useEffect(() => {
    // Fetch data initially when the component mounts
    fetchDonations()

    // Poll for updates every N seconds (e.g., every 60 seconds)
    const updateInterval = 10000 // 10 seconds in milliseconds

    const intervalId = setInterval(fetchDonations, updateInterval)

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (

    <div className='donor-wall'>
      {donors.map((donor) => (
        <DonorCard key={donor.id} donor={donor} />
      ))}
    </div>
  )
}

export default DonorWall
