import { StyledLabel } from './styles'

type LabelProps = {
  children: string
}

export function Label(props: LabelProps) {
  return <StyledLabel>{props.children}</StyledLabel>
}
