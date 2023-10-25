import Layout from '../../components/Layout'
import React, { useState } from 'react'
import axolotl4 from '@/img/axolotl4.jpg'
import '@/styles/form.css'

function DonationForm () {
  const [donationAmount, setDonationAmount] = useState(1)

  const handleDonationChange = (e) => {
    const amount = parseInt(e.target.value, 10)
    setDonationAmount(amount)
  }

  const handleButtonClick = (amount) => {
    setDonationAmount(amount)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes enviar el donativo a través de una API o realizar la lógica que prefieras.
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
                id='donationAmount'
                placeholder='1'
                value={donationAmount}
                onChange={handleDonationChange}
                min='1'
                max='10000'
              />
              <div className='center-label text-light '>
                <label htmlFor='donationAmount'>Amount</label>
              </div>

            </div>

            <div className='donation-buttons'>
              <button className='btn btn-primary' onClick={() => handleButtonClick(1)}>1 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(10)}>10 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(100)}>100 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(1000)}>1000 USD</button>
              <button className='btn btn-primary' onClick={() => handleButtonClick(10000)}>10000 USD</button>
            </div>

            <input
              type='range'
              min='1'
              max='10000'
              step='1'
              value={donationAmount}
              onChange={handleDonationChange}
            />

            {/* Barra de progreso */}
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                style={{ width: (donationAmount / 10000) * 100 + '%' }}
                aria-valuenow={donationAmount}
                aria-valuemin='1'
                aria-valuemax='10000'
              />
            </div>

            <button className='btn btn-pink w-100 py-2' type='submit'>Donate</button>
            <p className='mt-5 mb-3 text-body-secondary'>© 2023</p>
          </div>
        </form>
      </main>
    </Layout>
  )
}

export default DonationForm
