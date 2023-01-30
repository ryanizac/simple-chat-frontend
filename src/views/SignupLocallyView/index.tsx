import { Header } from '@/components/template/Header'
import { Container } from './styles'
import { UserDataForm } from './forms/UserDataForm'

export function SignupLocallyView() {
  return (
    <Container>
      <Header onClickMenu={() => console.log('opa')} />
      <UserDataForm />
    </Container>
  )
}
