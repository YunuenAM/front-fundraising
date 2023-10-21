import Caption from '../../components/Caption'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import axolotl from '@/img/axolotl.jpg'

const Home = () => {
  return (
    <Layout>
      <img className=' mx-auto d-block  rounded-circle p-1 mt-4   ' src={axolotl} alt='axolotl image' style={{ maxWidth: '50rem' }} />
      <Caption />
      <Card />

    </Layout>
  )
}
export default Home
