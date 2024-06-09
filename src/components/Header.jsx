import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import {Link} from "react-router-dom";

const Header = () => {
  const [loginLogOutBton, setLoginLogOutBtn] = useState("Login");

  // useEffect(callBackFunction, dependencyArray) callBackFunction is mandatory, dependencyArray is optional
  // useEffect(() => { console.log("Header called");}); if no dependency Array, => useEffect is called on every render
  // useEffect(( => { console.log("Header called");}),[LoginLogOutBtn]) => useEffect called only when dependency is updated
  // useEffect(() => {
  //   console.log("Header called");
  // }, [loginLogOutBton]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Add to 🛒</li>
          <button
            onClick={() =>
              loginLogOutBton === "Login"
                ? setLoginLogOutBtn("LogOut")
                : setLoginLogOutBtn("Login")
            }
            className="login-logout-btn"
          >
            {loginLogOutBton}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
