import { Header } from '@/components/template/Header'
import { Container } from './styles'
import { UserDataForm } from './forms/UserDataForm'
import { UserChatForm } from './forms/UserChatForm'

export function SignupLocallyView() {
  return (
    <Container>
      <Header onClickMenu={() => console.log('opa')} />
      <UserDataForm />
      <UserChatForm />
    </Container>
  )
}
