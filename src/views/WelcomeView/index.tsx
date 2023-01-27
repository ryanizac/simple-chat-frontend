import { Title } from '@/components/template/Title'
import { Paragraph } from '@/components/template/Paragraph'
import { PrimaryButton } from '@/components/buttons/PrimaryButton'
import { Column } from '@/components/template/Column'
import { SecondaryButton } from '@/components/buttons/SecondaryButton'
import { VersionText } from '@/components/VersionText'
import { Container } from './styles'

export function WelcomeView() {
  return (
    <Container>
      <Column gap={8} marginBottom={64} marginTop="auto">
        <Title>Simple Chat</Title>
        <Paragraph>
          Chats without static server, based on MQTT, with security and
          flexibility.
        </Paragraph>
      </Column>
      <Column gap={16}>
        <PrimaryButton>Signup locally</PrimaryButton>
        <SecondaryButton>Login locally</SecondaryButton>
      </Column>
      <Column alignSelf="center" marginTop="auto">
        <VersionText>V. 0.0.1</VersionText>
      </Column>
    </Container>
  )
}
