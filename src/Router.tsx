import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dasboard from './pages/Dasboard';

const AppRouter = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />   
        <Route path="/dashboard" element={<Dasboard/>} />
      </Routes>
    </Router>
  );
  
  export default AppRouter;