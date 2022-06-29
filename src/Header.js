import React from "react";
import "./Header.css";
// import "./Headerhover.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const[{basket,user},dispatch]=useStateValue();
  const handleAuthentication=()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="Header">
      <Link to="/">
        <img
          className=" header__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU"
          alt="error"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchinput" type="text" />
        <SearchIcon className="header__searchIcon" />
        
      </div>

      <div className="header__nav">
        <Link  to={!user &&'/login'}>
        <div onClick={handleAuthentication} className="header__option">
          <span className="header__optionline1">Hello {!user ? 'GUest':user.email}</span>
          <span className="header__optionline2">{user ? 'sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        
        <Link to='/Orders'>
        <div className="header__option">
          <span className="header__optionline1">Return</span>
          <span className="header__optionline2">&Order</span>
        </div>
        </Link>

        <div className="header__option">
          <span className="header__optionline1">Your'e</span>
          <span className="header__optionline2">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header__optionbasket">
            <ShoppingBagIcon />
            <span className="header__optionline3 header__basketcount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
