import "./Navbar.css";
import { BsSearch, BsHeart, BsCart } from "react-icons/bs";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";

const Navbar = () => {
  const { search, handleInputChange, user, userCart } = useAppContext();
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
            <BsHeart size={20} />
            Saved
          </div>
        </Link>
        <Link to="/cart">
          <div className="navItem">
            <div className="cart">
              <BsCart size={22} />
              <span>{userCart?.numOfCart}</span>
            </div>
            Cart
          </div>
        </Link>

        {user ? (
          <div className="text-sm flex items-center justify-center gap-2 text-blue-700 ">
            <BiUser size={19} /> {`${user?.fullname.slice(0, 5)}...`}
          </div>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
