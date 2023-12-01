import { useEffect, useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { GoogleLogin } from '@react-oauth/google'
import GoogleBtn from '../../components/buttons/GoogleBtn'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext/authContext'
import DataService from '../../services/apiService'
import { jwtDecode } from 'jwt-decode'
// import { decodeJWT } from 'jose'

const SignUpLandingPage = () => {
  const { isAuthenticated, setIsAuthenticated, signup } = useAuthContext()
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
    console.log(data)
    try {
      await signup(data)
    } catch (error) {
      console.error('error from signing up: ', error)
    }
  }

  const handleJWT = async (credentialResponse) => {
    const { credential } = credentialResponse
    const payload = credential ? jwtDecode(credential) : undefined
    if (payload) {
      console.log(payload)
      const response = await DataService.google(credential)
      if (response) {
        console.log(response)
      }
    }
  }

  const handleGoogleLogin = async (event) => {
    await window.open('http://localhost:8888/auth/google', '_self')
  }

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
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Sign Up</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* custom google button */}
            <button
              type="button"
              className=" text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              onClick={handleGoogleLogin}
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign up with Google
            </button>
            <form
              className="space-y-6"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    {...register('firstName')}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    {...register('lastName')}
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
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-400 hover:text-indigo-300"
                    >
                      Forgot password?
                    </a>
                  </div> */}
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
          <div>
            <p className="mt-10 text-center text-sm text-gray-300">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </>
    </FormProvider>
  )
}

export default SignUpLandingPage
