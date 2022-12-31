import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Home } from "./Pages";
import Login from "./Pages/Login";
import { Saved } from "./Pages";
import Cart from "./Pages/Cart";
import SignUp from "./Pages/SignUp";
import SharedLayout from "./components/SharedLayout";
import { useEffect } from "react";
import { useAppContext } from "./context/AppContext";

const App = () => {
  const { getUserCart, user, getUserSaved } = useAppContext();

  useEffect(() => {
    const getData = async () => {
      if (user) {
        await getUserCart();
        await getUserSaved();
      } else {
        alert("You are not logged in");
      }
    };

    getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
