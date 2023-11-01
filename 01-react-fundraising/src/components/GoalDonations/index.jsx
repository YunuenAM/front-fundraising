import './goalDonations.scss'

const GoalDonations = () => {
  return (
    <div>
      <h2 className='text-sucesss' />

      <div className='progress' style={{ width: '100%', height: '40px' }}>
        <div className='progress-bar bg-success rounded-2' role='progressbar' style={{ width: '30%' }}>
          We need 1 million
        </div>
      </div>
      <h2>Thank you for your support!</h2>
    </div>

  )
}
export default GoalDonations
