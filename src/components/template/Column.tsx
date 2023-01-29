import { ReactNode } from 'react'
import styled, { CSSProperties } from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

type ColumnProps = {
  children: ReactNode
  className?: string
} & CSSProperties

export function Column({ children, className, ...style }: ColumnProps) {
  return (
    <ColumnContainer className={className} style={style}>
      {children}
    </ColumnContainer>
  )
}
