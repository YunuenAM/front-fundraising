import React, { useState, useEffect } from 'react'
import { getAllDonations } from '../../services/donationServices'
import DonorCard from '../DonationCard/DonationCard'

const DonorWall = () => {
  const [donors, setDonors] = useState([])

  useEffect(() => {
    getAllDonations()
      .then((response) => {
        setDonors(response.data)
      })
      .catch((error) => console.error(error))
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
