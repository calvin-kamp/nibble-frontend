export interface Option {
  value: string
  label: string
}

export type OptionGroup = {
  label: string
  options: Option[]
}
