import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Header from './components/Header'
import Home from './pages/Home'
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;
