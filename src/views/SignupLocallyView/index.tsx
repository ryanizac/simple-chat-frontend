import { Header } from '@/components/template/Header'
import { Container } from './styles'

export function SignupLocallyView() {
  return (
    <Container>
      <Header onClickMenu={() => console.log('opa')} />
    </Container>
  )
}
