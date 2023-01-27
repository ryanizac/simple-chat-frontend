import { ReactNode } from 'react'
import styled, { CSSProperties } from 'styled-components'

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

type RowProps = {
  children: ReactNode
} & CSSProperties

export function Row({ children, ...style }: RowProps) {
  return <RowContainer style={style}>{children}</RowContainer>
}
