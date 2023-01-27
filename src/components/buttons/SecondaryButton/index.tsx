import { Container } from './styles'

type SecondaryButtonProps = {
  children: string
  onClick?: () => void
  href?: string
}

export function SecondaryButton(props: SecondaryButtonProps) {
  return (
    <Container onClick={props.onClick} href={props.href}>
      {props.children}
    </Container>
  )
}
