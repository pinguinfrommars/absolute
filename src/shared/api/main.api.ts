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
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 403) {
        return Promise.reject(error.response.data.message || 'Ошибка авторизации')
      }
      if (error.code === 'ERR_NETWORK') {
        throw new Error('Ошибка сети')
      }
      if (error.response) {
        throw new Error(error.response.data.message || 'Ошибка сервера')
      }
      if (error.request) {
        throw new Error('Нет ответа от сервера')
      }
    }

    throw new Error(error instanceof Error ? error.message : 'Что то пошло не так')
  },
)

export default instance
