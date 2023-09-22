import { Route, Routes } from 'react-router-dom'
import { Layout } from 'widgets/Layout'
import { MainPage } from './MainPage'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/2" element={<MainPage />} />
      </Route>
    </Routes>
  )
}
