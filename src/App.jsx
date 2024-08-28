import { Routes, Route } from "react-router-dom"
import OverviewPage from "./pages/OverviewPage"
import ProductsPage from "./pages/ProductsPage"
import Sidebar from "./components/Sidebar"
import UsersPage from './pages/UsersPage'
import SalesPage from "./pages/SalesPage"
import OrdersPage from "./pages/OrdersPage"

function App() {

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-800 via-blue-700 to-indigo-700 opacity-60" />



          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path='/sales' element={<SalesPage />} />
          <Route path='/orders' element={<OrdersPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
