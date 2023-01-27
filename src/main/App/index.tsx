import { GlobalStyle } from '../GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from '../MyRoutes'

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </>
  )
}
