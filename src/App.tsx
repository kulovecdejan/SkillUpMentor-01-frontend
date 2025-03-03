import { BrowserRouter, Routes, Route} from 'react-router-dom';

import LandingPage from './pages/landing/landing-page';
import Register from './pages/landing/register';
import Login from './pages/landing/login';
import ForgotPassword from './pages/landing/forgot-password';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
