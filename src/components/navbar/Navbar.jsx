import "./Navbar.css";
import { BsSearch, BsHeart, BsCart } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { search, handleInputChange } = useAppContext();
  return (
    <div className="wrapper">
      <div className="brand">
        <Link to="/">
        Test<span>Commerce</span>
        </Link>
      </div>

      <div className="search">
        <BsSearch />
        <input
          type="search"
          name="search"
          value={search}
          onChange={(e) => handleInputChange("search", e.target.value)}
          placeholder="Search Products" 
          className="search-input"
        />
      </div>

      <div className="navLinks">
        <Link to="/saved">
        <div className="navItem">
          <BsHeart  size={20} />
          Saved
        </div>
        </Link>
        <Link to="/cart">
        <div className="navItem">
          <div className="cart">
            <BsCart  size={22}/>
            <span>5</span>
          </div>
          Cart
        </div>
        </Link>

        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
