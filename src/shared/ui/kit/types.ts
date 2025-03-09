export interface IInputProps {
  modelValue: string
  disabled?: boolean
  id?: string
}
export interface IBaseInputProps extends IInputProps {
  type?: 'text' | 'password'
}
export interface IPhoneInputProps extends IInputProps {
  mask: string
}
export interface INumberInputProps {
  modelValue: number | null
  minNumber?: number
  id?: string
  disabled?: boolean
}
export interface IBaseSelectItem {
  label: string
  value: string | number
}
export interface IBaseSelectProps {
  id?: string
  items: IBaseSelectItem[]
  mode?: 'select' | 'multiselect'
}
export interface IDatepickerProps {
  modelValue: Date | null
  minDate?: Date | null
}
export interface IBaseButtonProps {
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  shape?: 'rounded' | 'square'
}
