import { SvgIcon } from './SvgIcon'
import { Container } from './styles'

type MenuButtonProps = {
  onClick?: () => void
}

export function MenuButton(props: MenuButtonProps) {
  return (
    <Container onClick={props.onClick}>
      <SvgIcon />
    </Container>
  )
}
