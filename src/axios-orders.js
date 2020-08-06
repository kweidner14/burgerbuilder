import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-58b24.firebaseio.com/'
})

export default instance;