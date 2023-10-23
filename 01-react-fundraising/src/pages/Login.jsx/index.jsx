import babyaxolotl from '@/img/babyaxolotl2.jpg'
import '@/styles/form.css'
import Layout from '../../components/Layout'

const SignIn = () => {
  return (
    <Layout>
      <main className='form-signin w-100 m-auto'>
        <form>
          <img className='mb-4 mt-5  align-items-center rounded-circle ' src={babyaxolotl} alt='' width='200' height='200' />
          <h1 className='h3 mb-3 fw-normal '>Please sign in</h1>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
              value=''
              onChange={() => {}}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              value=''
              onChange={() => {}}
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
