import { useEffect, useState } from 'react'
import { getSingleUserService } from '../../services/userService'

const DonorCard = ({ donor }) => {
  return (
    <div className='donor-card'>
      <img src={donor.avatarUrl} alt={`Avatar of ${donor.name}`} />
      <h3>{donor.user.name}</h3>
      <p>{donor.message}</p>
      <p>{donor.amount}</p>
    </div>
  )
}

export default DonorCard
