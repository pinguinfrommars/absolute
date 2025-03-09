/**
 * Residents
 */
export interface IRoomType {
  label: string
  value: string
}

export interface IAddResidentDto {
  name: string
  phone: string
  roomType: IRoomType[]
  address: string
  areaFrom: number | null
  areaTo: number | null
  dateFrom: Date | null
  dateTo: Date | null
}
