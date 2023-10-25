import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom'
import { loginUserService } from '@/services/userService'
import { useAuthContext } from '@/hooks/useAuth'
import Layout from '../../components/Layout'
import babyaxolotl from '@/img/babyaxolotl.jpg'
import '@/styles/form.css'

const SignIn = () => {
  const { login } = useAuthContext()
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const response = await loginUserService(data)
      if (response.status === 200) {
        login(response.data.token)
        navigate('/dashboard')
      }
    } catch (error) {
      console.log('Something went wrong', error.message)
    }
  }

  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <Layout>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <img className='mb-4 mt-5  align-items-center rounded-circle ' src={babyaxolotl} alt='' width='200' height='200' />
          <h1 className='h3 mb-3 fw-normal '>Please sign in</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <button className='btn btn-pink w-100 py-2 mt-2 ' type='submit'>Sign in</button>
          <p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
        </form>
      </main>
    </Layout>
  )
}
export default SignIn
