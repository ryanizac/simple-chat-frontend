import { createGlobalStyle } from 'styled-components'
import { htmlStyle } from './htmlStyle'
import { scrollStyle } from './scrollStyle'

export const GlobalStyle = createGlobalStyle`
  ${htmlStyle}
  ${scrollStyle}
`
