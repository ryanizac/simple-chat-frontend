import styled from 'styled-components'

type CircleProps = {
  size: number
  background: string
}

export const Circle = styled.div<CircleProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: ${({ background }) => background};
  border-radius: ${({ size }) => size / 2}px;
`
