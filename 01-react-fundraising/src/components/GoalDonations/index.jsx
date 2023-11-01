import React, { useState, useEffect } from 'react'

const GoalDonations = () => {
  const [setDonation] = useState([])
  const [goal] = useState(1000000)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://perfect-erin-goldfish.cyclic.app/api/getAllDonations/')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        const totalDonations = data.reduce((sum, donation) => sum + donation.amount, 0)
        setDonation(data)
        updateProgress(totalDonations)
      } catch (error) {
        console.error('Something went wrong', error)
      }
    }
    fetchData()
  })

  const updateProgress = (totalDonations) => {
    const percentage = (totalDonations / goal) * 100

    const clampedPercentage = Math.min(100, Math.max(0, percentage))

    return (
      <div>
        <h2 className='text-success' />

        <div className='progress' style={{ width: '100%', height: '40px' }}>
          <div
            id='progress-bar'
            className='progress-bar bg-success rounded-2'
            role='progressbar'
            style={{ width: `${clampedPercentage}%` }}
          >
            We need {goal} donations
          </div>
        </div>
        <h2>Thank you for your support!</h2>
      </div>
    )
  }

  return updateProgress // Return the result of the updateProgress function
}

export default GoalDonations
