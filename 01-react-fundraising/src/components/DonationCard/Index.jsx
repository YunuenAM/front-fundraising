import './donorcard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const DonorCard = ({ donor }) => {
  return (
    <div className='donor-card'>
      <FontAwesomeIcon icon={faUser} size='2x' /> {/* Use the FontAwesome icon */}
      <h3>{donor.user.name}</h3>
      <p>{donor.message}</p>
      <p>{donor.amount} USD </p>
    </div>
  )
}

export default DonorCard
