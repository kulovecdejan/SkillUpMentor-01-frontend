import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./pages/landing/LandingPage"
import RegisterPage from "./pages/landing/RegisterPage"
import LoginPage from "./pages/landing/LoginPage"
import ForgotPasswordPage from "./pages/landing/ForgotPasswordPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/register" element={<RegisterPage/>}></Route>
        <Route path="/forgot-password" element={<ForgotPasswordPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
