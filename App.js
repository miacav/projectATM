import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Balance from './pages/Balance';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw'
import Logout from './pages/Logout'

export default function App() {
  return (
    <Container fluid className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/balance/:id" element={<Balance />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}