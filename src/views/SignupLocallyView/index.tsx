import { Header } from '@/components/template/Header'
import { Container } from './styles'
import { Input, Label, InputGroup, Form } from '@/components/form'
import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import { H2 } from '@/components/template/H2'

export function SignupLocallyView() {
  return (
    <Container>
      <Header onClickMenu={() => console.log('opa')} />
      <Form>
        <H2>Signup locally</H2>
        <InputGroup>
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </InputGroup>
        <InputGroup>
          <Label>Username</Label>
          <Input placeholder="@your_user.name" />
        </InputGroup>
        <InputGroup>
          <Label>Password</Label>
          <Input placeholder="Minimum 8 digits" type="password" />
        </InputGroup>
        <InputGroup>
          <Label>Confirm Password</Label>
          <Input placeholder="Minimum 8 digits" type="password" />
        </InputGroup>
        <PrimaryButton>Continue</PrimaryButton>
      </Form>
    </Container>
  )
}
