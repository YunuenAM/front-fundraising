import './caption.scss'
import { Link } from 'react-router-dom'

const Caption = () => {
  const captionStyle = {
    border: '2px solid white',
    padding: '10px',
    fontSize: '24px'

  }

  return (
    <div className='caption bg-cream' style={captionStyle}>
      <h2 className='h2'>Save the Mexican Axolotl: Your Donation Can Make a Difference</h2>
      <p>The Mexican axolotl, an iconic and endangered species, needs our help more than ever. These astonishing amphibians, native to Mexico, are on the brink of extinction due to the loss of their natural habitat, water pollution, and the proliferation of invasive species. However, there is still hope. Your donation can make a difference by supporting conservation efforts and research aimed at protecting this unique and fascinating species. Every contribution brings us one step closer to ensuring that future generations can enjoy the natural wonder that is the Mexican axolotl. Join the cause and donate today to save this gem of Mexican biodiversity!</p>

      <div className='text-center'>
        <Link to='/dashboard'> {/* Redirige al usuario a /dashboard */}
          <button className='btn btn-warning'>
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Caption
