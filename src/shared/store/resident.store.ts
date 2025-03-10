import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { API } from '../api'
import type { IAddResidentDto } from '../api/api.types'

export const useResidentStore = defineStore('resident', () => {
  const loading: { [key: string]: boolean } = reactive({})
  const errors: { [key: string]: string } = reactive({})

  async function addResident(addResidentDto: IAddResidentDto, key: string = 'addResident') {
    loading[key] = true
    try {
      const { error } = await API.resident.addResident(addResidentDto)
      if (error) errors[key] = error
    } finally {
      loading[key] = false
    }
  }

  return {
    loading,
    errors,
    addResident,
  }
})
