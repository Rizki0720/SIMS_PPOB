import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/login"
import Navbar from "./components/Fragments/Navbar"
import Home from "./pages/Home"
import TopUp from './pages/TopUp';
import Profile from './pages/Profile';
import UpdateProfilePage from './pages/updateProfile.page';
import Transaction from './pages/Transaction';
import History from './pages/History';
function App() {
  
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/TopUp" element={<TopUp/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/akun" element={<Profile/>}/>
          <Route path="/akun/edit" element={<UpdateProfilePage/>}/>
          <Route path="/transaction/history" element={<History/>}/>
          <Route path="/transaction" element={<Transaction/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
