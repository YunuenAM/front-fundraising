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
      content: "Let's rally together to support Salamandria, the precious axolotl! Salamandria represents the beauty and wonder of aquatic life, but these incredible creatures are endangered. Your donation can make a real impact, providing the care and conservation efforts needed to ensure Salamandria and her fellow axolotls thrive. Join us in safeguarding their future. Contribute today and be a hero for Salamandria and her species. Your support counts!😎💚#SaveSALAMANDRIA"
    },
    {
      id: 4,
      imgSrc: axolotl4,
      title: 'Gilly',
      content: 'Join our cause to support Gili, the courageous axolotl living in Xochimilco! Gili represents the incredible biodiversity in this unique ecosystem, but their habitat faces constant threats. With your donation, we can ensure that Gili and their fellow axolotls have a safe and healthy home in Xochimilco. Join our effort to conserve this unique species. Donate today and be part of the mission to protect Gili and their home in Xochimilco! Your support makes a difference.🙏🏽💜#SaveGILLY'

    },
    {
      id: 5,
      imgSrc: axolotl7,
      title: 'Amphie',
      content: 'Join the cause and help save Amphie, the charming axolotl! Your donation makes a difference. With your support, we can ensure a bright future for Amphie and their species. Be a donor and be part of the solution! Every contribution counts.🙌🏽🧡#SaveAMPHIE'
    },
    {

      id: 6,
      imgSrc: babyaxolotl2,
      title: 'Kiko',
      content: "Join the cause and become a donor to preserve Kiko, the amazing axolotl! Your generosity can make a difference in Kiko's conservation and their habitat. Be a hero for Kiko and their species! Donate today and secure a bright future for these charming aquatic animals. Every contribution matters.🙂🤍#SaveKIKO"
    },
    {

      id: 7,
      imgSrc: babyaxolotl,
      title: 'Quaxo',
      content: 'Help save the little axolotl, Quaxo, with your donation! Every contribution brings us one step closer to securing a safe future for this adorable baby axolotl. Join our cause and be a part of their story. Donate now and make a difference for Quaxo and their species! Your generosity matters.🫶🏽🤎#SaveQUAXO'
    },
    {

      id: 8,
      imgSrc: axolotl9,
      title: 'Marlowe',
      content: 'Your donation can make all the difference in saving Marlowe, the axolotl. Be a part of this rescue mission and help secure a bright future for Marlowe and their fellow axolotls. Your contribution is a vital step in their preservation. Donate now and be a hero for Marlowee!🙂🖤#SaveMARLOWE'
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
