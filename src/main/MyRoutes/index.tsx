import { ErrorView, SignupLocallyView, WelcomeView } from '@/views'
import { Routes, Route } from 'react-router-dom'

const errorMessage404 = 'A página não foi encontrada'

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WelcomeView />} />
      <Route path="/signup/locally" element={<SignupLocallyView />} />
      <Route
        path="*"
        element={<ErrorView code={404} message={errorMessage404} />}
      />
    </Routes>
  )
}
