/**
 * Residents
 */

export interface IAddResidentDto {
  name: string
  phone: string
  roomType: string
  address: string
  areaFrom: number
  areaTo: number
  dateFrom: Date | string
  dateTo: Date | string
}
