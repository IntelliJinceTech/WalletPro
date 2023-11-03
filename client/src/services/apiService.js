import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8888',
  withCredentials: true,
})

function DataService() {
  // auth
  this.getUser = () => {
    return instance.get('/api/user/getUser')
  }

  this.logout = () => {
    return instance.get('/api/user/logout')
  }

  this.login = (data) => {
    return instance.post('/api/user/login', data)
  }
  this.signup = (data) => {
    // todo: debugging needed
    // console.log('Data Service data: ', data)
    return instance.post('/api/user/signup', data)
  }

  // cards - CRUD
  this.getCards = () => instance.get(`/cards/`)
  this.addCard = (data) => instance.post(`/cards/addCard`, data)
  this.updateCard = (cardId, data) => instance.put(`/cards/updateCard/${cardId}`, data)
  this.deleteCard = (cardId) => instance.delete(`/cards/deleteCard/${cardId}`)
}

export default new DataService()
