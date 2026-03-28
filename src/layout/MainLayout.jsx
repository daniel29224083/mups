import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsAppFloat from '../components/layout/WhatsAppFloat'
import BackToTop from '../components/layout/BackToTop'
import ScrollToTop from './ScrollToTop'

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </div>
  )
}

export default MainLayout
