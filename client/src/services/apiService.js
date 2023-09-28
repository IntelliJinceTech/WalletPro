import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8888',
  withCredentials: true,
})

function DataService() {
  this.getUser = () => {
    return instance.get('/getUser')
  }

  this.logout = () => {
    return instance.get('/logout')
  }

  this.login = (data) => {
    return instance.post('/login', data)
  }
  this.signup = (data) => {
    // todo: debugging needed
    console.log('Data Service data: ', data)
    return instance.post('/signup', data)
  }
}

export default new DataService()
