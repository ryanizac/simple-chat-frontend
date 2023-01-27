import { createGlobalStyle } from 'styled-components'
import { htmlStyle } from './htmlStyle'
import { scrollStyle } from './scrollStyle'
import { cssReset } from './cssReset'

export const GlobalStyle = createGlobalStyle`
  ${htmlStyle}
  ${scrollStyle}
  ${cssReset}
`
