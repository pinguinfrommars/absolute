import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
instance.interceptors.response.use(
  function (response) {
    return response
  },
  async function (error) {
    if (error.response && error.response.status === 403) {
      throw Error
    }

    // Ошибка соединения с сетью Интернет
    if (error.code && error.code === 'ERR_NETWORK') {
      throw Error
    }
    return Promise.reject(error?.response?.status)
  },
)

export default instance
