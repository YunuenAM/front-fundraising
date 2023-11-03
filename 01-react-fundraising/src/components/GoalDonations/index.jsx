import React, { useState, useEffect } from 'react'

const GoalDonations = () => {
  const [donations, setDonations] = useState([])
  const [goal] = useState(1000000)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://perfect-erin-goldfish.cyclic.app/api/donations/')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setDonations(data) // Update the donations state
      } catch (error) {
        console.error('Something went wrong', error)
      }
    }

    fetchData()
  }, []) // Provide an empty dependency array to run the effect only once

  const updateProgress = () => {
    const percentage = (donations / goal) * 100

    const clampedPercentage = Math.min(100, Math.max(0, percentage))

    return (
      <div>
        <h2 className='text-success'>{clampedPercentage}%</h2>

        <div className='progress' style={{ width: '100%', height: '40px' }}>
          <div
            id='progress-bar'
            className='progress-bar bg-success rounded-2'
            role='progressbar'
            style={{ width: `${clampedPercentage}%` }}
          >
            We need {goal - donations} more donations
          </div>
        </div>
        <h2>Thank you for your support!</h2>
      </div>
    )
  }

  return (
    <div>
      {updateProgress()} {/* Call the updateProgress function and render its result */}
    </div>
  )
}

export default GoalDonations
