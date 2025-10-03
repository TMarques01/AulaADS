import { Link } from "react-router-dom";
import "../styles/Navbar.css";

import DecryptedText from "./DecryptedText";

export default function Navbar({ color = "#ebebeb" }) {
  return (
    <nav className="navbar" style={{ "--nav-color": color }}>
      <div className="navbar-menu">
        <Link to="/" className="home">
          <DecryptedText text="Home" animateOn="hover" sequential />
        </Link>
        <a href="https://github.com/TMarques01" className="code">
          <DecryptedText text="Code" animateOn="hover" sequential />
        </a>
        <Link to="/music" className="music">
          <DecryptedText text="Music" animateOn="hover" sequential />
        </Link>
      </div>
    </nav>
  );
}
