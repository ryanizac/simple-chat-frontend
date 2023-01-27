import { Row } from '@/components/template/Row'
import { Code, Container, GoToLink, Message, OpsMessage } from './styles'

type ErrorViewProps = {
  code: number
  message: string
}

export function ErrorView(props: ErrorViewProps) {
  return (
    <Container>
      <Code>{props.code}</Code>
      <OpsMessage>Ops!</OpsMessage>
      <Message>{props.message}</Message>
      <Row gap={20}>
        <GoToLink>Página anterior</GoToLink>
        <GoToLink>Página inicial</GoToLink>
      </Row>
    </Container>
  )
}
