import * as React from 'react'
import { Container } from './styles'

type PrimaryButtonProps = {
  children: string
  onClick?: () => void
}

export function PrimaryButton(props: PrimaryButtonProps) {
  return <Container onClick={props.onClick}>{props.children}</Container>
}
