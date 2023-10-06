import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8888',
  withCredentials: true,
})

function DataService() {
  // auth
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
    // console.log('Data Service data: ', data)
    return instance.post('/signup', data)
  }

  // cards - CRUD
  this.addCard = (data) => instance.post('/addCard', data)
  this.updateCard = (cardId, data) => instance.put(`/updateCard/${cardId}`, data)
  this.deleteCard = (cardId) => instance.delete(`/deleteCard/${cardId}`)
}

export default new DataService()
