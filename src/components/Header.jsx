import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () => {

const [loginLogOutBton, setLoginLogOutBtn] = useState('Login');

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Add to 🛒</li>
          <button onClick={()=> loginLogOutBton==='Login'? setLoginLogOutBtn('LogOut'): setLoginLogOutBtn('Login')}className="login-logout-btn">{loginLogOutBton}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;