import { useEffect, useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { GoogleLogin } from '@react-oauth/google'
import GoogleBtn from '../../components/buttons/GoogleBtn'
import axios from 'axios'
import { useRoutingContext } from '../../context/RoutingContext/routingContext'
import { useAuthContext } from '../../context/AuthContext/authContext'
import DataService from '../../services/apiService'
import { jwtDecode } from 'jwt-decode'
// import { decodeJWT } from 'jose'

const SignUpLandingPage = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthContext()
  const { currentPage, setCurrentPage } = useRoutingContext()
  const methods = useForm({
    criteriaMode: 'all',
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods

  const onSubmit = async (data, event) => {
    event.preventDefault()
    // console.log('data: ', data)
    try {
      console.log(data)
      // const response = await DataService.signup(data)
      setIsAuthenticated(true)
      setCurrentPage('Dashboard')
      console.log(response.data)
    } catch (error) {
      console.error('error from signing up: ', error)
    }
  }

  const handleCallbackResponse = (res) => {
    console.log(`Encoded JWT ID Token: ${res.credential}`)
    const userObject = jwtDecode(res.credential)
    console.log(userObject)
  }

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id: '16726005967-ahkh53ae5hqckoreqtavf712t7gb5kf3.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    })
    google.accounts.id.renderButton(document.getElementById('googleSignIn'), { theme: 'outline', size: 'large' })
  }, [])

  return (
    <FormProvider {...methods}>
      <>
        {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
        <div
          id="signup"
          className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"
        >
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="firstLastName"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  First and Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstLastName"
                    name="firstLastName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    {...register('name')}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    {...register('email')}
                  />
                </div>
              </div>
              {/* <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    {...register('username')}
                  />
                </div>
              </div> */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    {...register('password')}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            {/* Google SignIn  */}
            {/* <div>
              <div id="googleSignIn"></div>
            </div> */}

            {/* Google Login from npm package */}
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse)
                const { credential } = credentialResponse
                const payload = credential ? jwtDecode(credential) : undefined
                if (payload) {
                  console.log(payload)
                }
              }}
              onError={(error) => console.log(error)}
              useOneTap
            />
            <p className="mt-10 text-center text-sm text-gray-400">
              Not a member?{' '}
              <a
                href="#"
                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
              >
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div>
      </>
      {/*       
      <div className="hero  bg-base-200 p-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">Sign up now for increased financial understanding of your daily credit card carry!</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">

              <form className="form-control" onSubmit={methods.handleSubmit(onSubmit)}>
                <label className="label" htmlFor="email">
                  <span className="label-text">Email:</span>
                </label>
                <input type="email" placeholder="xxxx@gmail.com" name="email" className="input input-bordered w-full max-w-xs" {...register('email')} />

                <label htmlFor="password" className="label mt-2">
                  <span className="label-text">Password (12 characters minimum): </span>
                </label>
                <input type="password" name="password" className="input input-bordered w-full max-w-xs mb-5" {...register('password')} />
                <button className="btn btn-primary" type="submit">
                  Signup
                </button>
              </form> */}

      {/* <GoogleBtn /> */}
      {/* </div>
          </div>
        </div>
      </div> */}
    </FormProvider>
  )
}

export default SignUpLandingPage
