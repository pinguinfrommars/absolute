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
export interface IBaseSelectItem {
  label: string
  value: string | number
}
export interface IBaseSelectProps {
  id?: string
  items: IBaseSelectItem[]
}
