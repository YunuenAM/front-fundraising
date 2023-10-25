import React, { useState } from 'react'
import babyaxolotl from '@/img/babyaxolotl2.jpg'
import '@/styles/form.css'
import Layout from '../../components/Layout'
// import { postData } from '@/services/api.js'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  async function handleSubmit (e) {
    e.preventDefault()

    // Valida los datos del formulario antes de enviarlos
    if (!email || !password) {
      console.error('Todos los campos son obligatorios.')
    }

    // // Crea un objeto con los datos del formulario
    // const formData = {

    //   email,
    //   password,

    // }

    // try {
    // // Llama a la función postData para enviar los datos al backend
    //   const response = await postData('api/users/', formData)

    //   // Maneja la respuesta del backend como desees
    //   console.log('Respuesta del backend:', response)

    //   // Limpia los campos del formulario después del envío exitoso
    //   setName('')
    //   setEmail('')
    //   setPassword('')
    //   setRole('')
    // } catch (error) {
    //   console.error('Error al enviar datos al backend:', error)
    // // Maneja el error de alguna manera (p. ej., muestra un mensaje de error al usuario)
    // }
  }

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
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor='floatingInput'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
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
