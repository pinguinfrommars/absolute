import http from './main.api'
import type { IAddResidentDto, IServerResponse } from './api.types'

async function addResident(
  addResidentDto: IAddResidentDto,
): Promise<{ data?: IServerResponse; error?: string }> {
  console.log('addResidentDto:', addResidentDto)
  try {
    const response = await http.post<IServerResponse>(`/resident`, { ...addResidentDto })
    return { data: response.data }
  } catch (error) {
    console.error('Ошибка при добавлении резидента:', error)

    let errorMessage = 'Что-то пошло не так'
    if (error instanceof Error) {
      errorMessage = error.message
    } else if (typeof error === 'string') {
      errorMessage = error
    }
    return { error: errorMessage }
  }
}

export default {
  addResident,
}
