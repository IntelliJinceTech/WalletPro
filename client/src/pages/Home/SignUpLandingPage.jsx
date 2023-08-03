import { useState } from 'react'
import { useForm, FormProvider, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { GoogleLogin } from '@react-oauth/google'
import GoogleBtn from '../../components/buttons/GoogleBtn'
import axios from 'axios'
import { useRoutingContext } from '../../context/RoutingContext/routingContext'
import { useAuthContext } from '../../context/AuthContext/authContext'
import DataService from '../../services/apiService'

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
    console.log('data: ', data)
    try {
      const response = await DataService.signup(data)
      setIsAuthenticated(true)
      setCurrentPage('Dashboard')
      console.log(response.data)
    } catch (error) {
      console.error('error from signing up: ', error)
    }
  }

  return (
    <FormProvider {...methods}>
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
              </form>

              {/* <GoogleBtn /> */}
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}

export default SignUpLandingPage
