import Caption from '../../components/Caption'
import Card from '../../components/Card'
import DonorWall from '../../components/DonorWall/Index'
import Layout from '../../components/Layout'
import axolotl from '@/img/axolotl.jpg'
import '@/styles/form.css'

const Home = () => {
  return (
    <Layout>
      <img
        className=' mx-auto d-block  rounded-circle p-1 mt-4 img-fluid  responsive-image '
        srcSet={axolotl}
        alt='axolotl image'
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <Caption />
      <Card />
      <DonorWall />

    </Layout>
  )
}
export default Home
