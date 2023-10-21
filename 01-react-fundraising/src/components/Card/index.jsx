import axolotl from '@/img/axolotl.jpg'
import axolotl2 from '@/img/axolotl2.jpg'
import axolotl3 from '@/img/axolotl3.jpg'
import axolotl4 from '@/img/axolotl4.jpg'

const Card = () => {
  const cardData = [
    {
      id: 1,
      imgSrc: axolotl,
      title: 'Card 1',
      content: 'Content for Card 1'
    },
    {
      id: 2,
      imgSrc: axolotl2,
      title: 'Card 2',
      content: 'Content for Card 2'
    },
    {

      id: 3,
      imgSrc: axolotl3,
      title: 'Card 2',
      content: 'Content for Card 2'
    },
    {
      id: 4,
      imgSrc: axolotl4,
      title: 'Card 1',
      content: 'Content for Card 1'
    },
    {
      id: 5,
      imgSrc: './img/axolotl2.jpg',
      title: 'Card 2',
      content: 'Content for Card 2'
    },
    {

      id: 6,
      imgSrc: './img/axolotl3.jpg',
      title: 'Card 2',
      content: 'Content for Card 2'
    },
    {

      id: 7,
      imgSrc: './img/axolotl3.jpg',
      title: 'Card 2',
      content: 'Content for Card 2'
    },
    {

      id: 8,
      imgSrc: './img/axolotl3.jpg',
      title: 'Card 2',
      content: 'Content for Card 2'
    }

  ]

  return (
    <div className='row'>
      {cardData.map((card) => (
        <div className='col-md-3' key={card.id}>
          <div className='card' style={{ width: '18rem', margin: '50px' }}>
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
