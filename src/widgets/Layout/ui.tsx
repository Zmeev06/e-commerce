import { Outlet } from 'react-router-dom'
import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
