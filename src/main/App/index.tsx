import { WelcomeView } from '@/views'
import { GlobalStyle } from '../GlobalStyle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomeView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
