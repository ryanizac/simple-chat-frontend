import { WelcomeView } from '@/views'
import { GlobalStyle } from '../GlobalStyle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorView } from '@/views/ErrorView'

const errorMessage404 = 'A página não foi encontrada'

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeView />} />
          <Route
            path="*"
            element={<ErrorView code={404} message={errorMessage404} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}
