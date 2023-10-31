import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout'
import { postDonation } from '@/services/donationServices'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '@/context/AuthContext'
import axolotl4 from '@/img/axolotl4.jpg'
import '@/styles/form.css'

function DonationForm () {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [amount, setAmount] = useState(1)

  const handleDonationChange = (e) => {
    const amount = parseInt(e.target.value, 10)
    setAmount(amount)
  }

  const handleButtonClick = (newAmount) => {
    setAmount(newAmount)
  }

  const handleDonateClick = async () => {
    if (isNaN(amount) || amount < 1) {
      console.error('Please enter a valid donation amount')
      return
    }
    try {
      const response = await postDonation({ amount, token: login.token })

      if (response.status === 200) {
        navigate('/dashboard')
        console.log('Donation submitted successfully')
      } else {
        console.error('Something went wrong')
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
