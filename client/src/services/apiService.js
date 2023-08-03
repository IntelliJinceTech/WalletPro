import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8888',
  withCredentials: true,
})

class DataService {
  getUser() {
    return instance.get('/getUser')
  }

  logout() {
    return instance.get('/logout')
  }

  login(data) {
    return instance.post('/login', data)
  }
  signup(data) {
    // todo: debugging needed
    console.log('Data Service data: ', data)
    return instance.post('/signup', data)
  }
}

export default new DataService()
