import { Logo } from '../Logo'
import { MenuButton } from '../MenuButton'
import { Container } from './styles'

type HeaderProps = {
  onClickMenu?: () => void
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Logo />
      {props.onClickMenu && <MenuButton onClick={props?.onClickMenu} />}
    </Container>
  )
}
