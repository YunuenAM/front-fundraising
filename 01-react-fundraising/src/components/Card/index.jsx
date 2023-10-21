import axolotl from '@/img/axolotl.jpg'
import axolotl2 from '@/img/axolotl2.jpg'
import axolotl3 from '@/img/axolotl3.jpg'
import axolotl4 from '@/img/axolotl4.jpg'
import axolotl7 from '@/img/axolotl7.jpg'
import babyaxolotl2 from '@/img/babyaxolotl2.jpg'
import babyaxolotl from '@/img/babyaxolotl.jpg'
import axolotl9 from '@/img/axolotl9.jpg'

const Card = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: axolotl,
      title: 'Axo',
      content: 'Help Axo keep swimming happily in his habitat! Your generous donation will ensure a clean and safe environment, securing a bright future for this adorable axolotl. Join us in preserving the beauty of nature and supporting axo on his journey! 🌊🐟💙 #SaveAXO'
    },
    {
      id: 2,
      imgSrc: axolotl2,
      title: 'Lottie',
      content: 'Help Lottie, the adorable axolotl, thrive in her natural habitat! Axolotls are an endangered species, and with your contribution, we can ensure that Lottie and her friends have a safe home. Your generosity will make a difference in the conservation of these fascinating aquatic animals. Donate now and be part of the mission to save Lottie and her species! Every small contribution matters.✨🪸💛#SaveLOTTIE'
    },
    {

      id: 3,
      imgSrc: axolotl3,
      title: 'Salamandria',
      content: 'Content for Card 2'
    },
    {
      id: 4,
      imgSrc: axolotl4,
      title: 'Gilly',
      content: 'Content for Card 1'
    },
    {
      id: 5,
      imgSrc: axolotl7,
      title: 'Amphie',
      content: 'Content for Card 2'
    },
    {

      id: 6,
      imgSrc: babyaxolotl2,
      title: 'Kiko',
      content: 'Content for Card 2'
    },
    {

      id: 7,
      imgSrc: babyaxolotl,
      title: 'Quaxo',
      content: 'Content for Card 2'
    },
    {

      id: 8,
      imgSrc: axolotl9,
      title: 'Marlowe',
      content: 'Content for Card 2'
    }

  ]

  return (
    <div className='row'>
      {cardData.map((card) => (
        <div className='col-md-3' key={card.id}>
          <div className='card' style={{ width: '18rem', margin: '50px 0', height: '90%' }}>
            <img src={card.imgSrc} className='card-img-top' alt={card.title} />
            <div className='card-body'>
              <h5 className='card-title'>{card.title}</h5>
              <p className='card-text'>{card.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
