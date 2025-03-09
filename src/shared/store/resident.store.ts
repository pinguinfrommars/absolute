import { defineStore } from 'pinia'
import { API } from '../api'
import type { IAddResidentDto } from '../api/api.types'

export const useResidentStore = defineStore('resident', () => {
  function addResident(addResidentDto: IAddResidentDto) {
    return API.resident.addResident(addResidentDto)
  }

  return { addResident }
})
