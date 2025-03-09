import http from './main.api'
import type { IAddResidentDto } from './api.types'

async function addResident(addResidentDto: IAddResidentDto) {
  return await http.post<IAddResidentDto>(`/resident`, { ...addResidentDto })
}

export default {
  addResident,
}
