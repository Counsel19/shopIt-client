
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Home } from './Pages'
import Login from './Pages/Login'
import {Saved} from "./Pages"
import Cart from './Pages/Cart'
import SignUp from "./Pages/SignUp"
import SharedLayout from './components/SharedLayout'



const App = ()=>{
  return(
        <Router>
          
          <Routes>
            <Route path="/" element={<SharedLayout/>}>
              <Route index element={<Home/>}/>
              <Route path="/saved" element={<Saved/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
        </Router>
        )
}

export default App
