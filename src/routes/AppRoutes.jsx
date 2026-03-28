import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import ProductDetailPage from '../pages/ProductDetailPage'
import RepairPage from '../pages/RepairPage'
import TradeInPage from '../pages/TradeInPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import FAQPage from '../pages/FAQPage'
import NotFoundPage from '../pages/NotFoundPage'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:slug" element={<ProductDetailPage />} />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/trade-in" element={<TradeInPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
