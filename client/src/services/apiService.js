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
    return instance.delete('/auth/logout')
  }

  this.login = (data) => {
    return instance.post('/auth/login', data)
  }
  this.signup = (data) => {
    return instance.post('/auth/signup', data)
  }

  // google
  // this.google = (data) => {
  //   return instance.get('/auth/google', {
  //     headers: {
  //       Authorization: `Bearer ${data}`,
  //     },
  //   })
  //   // .then((response) => console.log(response.data))
  //   // .catch((err) => console.log(err))
  // }
  this.google = () => {
    return instance.get('/auth/google')
  }

  // cards - CRUD
  this.getCards = () => instance.get(`/cards/`)
  this.addCard = (data) => instance.post(`/cards/addCard`, data)
  this.updateCard = (cardId, data) => instance.put(`/cards/updateCard/${cardId}`, data)
  this.deleteCard = (cardId) => instance.delete(`/cards/deleteCard/${cardId}`)
}

export default new DataService()
