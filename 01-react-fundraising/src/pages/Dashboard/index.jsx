import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { postDonation } from '@/services/donationServices'
import { useNavigate } from 'react-router-dom'
import axolotl4 from '@/img/axolotl4.jpg'
import '@/styles/form.css'

function DonationForm () {
  const navigate = useNavigate()
  const [amount, setAmount] = useState(1)
  const [comment, setComment] = useState('')

  const handleDonationChange = (e) => {
    const amount = parseInt(e.target.value, 10)
    setAmount(amount)
  }

  const handleCommentChange = (e) => {
    const comment = e.target.value
    setComment(comment)
  }

  const handleButtonClick = (newAmount) => {
    setAmount(newAmount)
  }
  const handleDonateClick = async () => {
    if (isNaN(amount) || amount < 1) {
      console.error('Please enter a valid donation amount')
      return
    }

    const donationData = {
      amount,
      comment
    }

    const token = localStorage.getItem('token')
    console.log('token 1', token)
    // Format the data as "amount=number"

    try {
      const response = await postDonation(donationData, token)

      if (response) {
        if (response.status === 200) {
          navigate('/dashboard')
          console.log('Donation submitted successfully')
        } else {
          console.error('Error: Donation request failed with status ' + response.status)
        }
      } else {
        console.error('Error: No response received from the server')
      }
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  }

  return (
    <Layout>
      <main className='form-register w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <div className='d-flex flex-column align-items-center'>
            <img className='mb-4 mt-5 align-items-center rounded-circle' src={axolotl4} alt='' width='200' height='200' />
            <h1 className='h3 mb-3 fw-normal text-warning '>Please Donate</h1>

            <div className='form-floating'>
              <input
                type='number'
                className='form-control'
                id='amount'
                placeholder='1'
                name='amount'
                value={amount}
                onChange={handleDonationChange}
                min='1'
                max='10000'
              />
              <div className='center-label text-light '>
                <label htmlFor='amount'>Amount</label>
              </div>

              <div>
                <input
                  type='text'
                  className='form-control'
                  id='comment'
                  placeholder='comment'
                  name='comment'
                  value={comment}
                  onChange={handleCommentChange}
                />
              </div>

            </div>

            <div className='donation-buttons'>
              <button className='btn btn-primary' onClick={() => handleButtonClick(1)}>1 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(10)}>10 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(100)}>100 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(1000)}>1000 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(10000)}>10000 USD</button>
            </div>

            {/* Barra de progreso */}
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: (amount / 10000) * 100 + '%' }}
                aria-valuenow={amount}
                aria-valuemin='1'
                aria-valuemax='10000'
              />
            </div>

            <button className='btn btn-pink w-100 py-2' type='button' onClick={handleDonateClick}>Donate</button>
            <p className='mt-5 mb-3 text-body-secondary'>© 2023</p>
          </div>
        </form>
      </main>
    </Layout>
  )
}

export default DonationForm
