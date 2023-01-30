import { LabelHTMLAttributes } from 'react'
import { StyledLabel } from './styles'

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>

export function Label(props: LabelProps) {
  return <StyledLabel {...props} />
}
