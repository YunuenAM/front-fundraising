import Layout from '../../components/Layout'
import axolotl from '@/img/axolotl.jpg'

const Home = () => {
  return (
    <Layout>
      <img className=' mx-auto d-block  rounded-circle p-1 mt-4   ' src={axolotl} alt='axolotl image' style={{ maxWidth: '50rem' }} />
    </Layout>
  )
}
export default Home
