import { FormHTMLAttributes } from 'react'
import { StyledForm } from './styles'

type FormProps = FormHTMLAttributes<HTMLFormElement>

export function Form({ ...props }: FormProps) {
  return <StyledForm {...props} />
}
