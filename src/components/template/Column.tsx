import { ReactNode } from 'react'
import styled, { CSSProperties } from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

type ColumnProps = {
  children: ReactNode
} & CSSProperties

export function Column({ children, ...style }: ColumnProps) {
  return <ColumnContainer style={style}>{children}</ColumnContainer>
}
