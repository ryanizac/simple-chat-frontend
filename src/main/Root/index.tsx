import { ReactNode } from 'react'
import { Container } from './styles'

type RootProps = {
  children: ReactNode
}

export function Root(props: RootProps) {
  return <Container>{props.children}</Container>
}
