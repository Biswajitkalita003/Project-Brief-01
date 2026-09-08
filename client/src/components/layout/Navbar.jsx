import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="nav-brand">Campus Connect</div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>

        <div className={`nav-links ${menuOpen ? "menu-open" : ""}`}>
          <NavLink to="/" className={getLinkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink
            to="/dashboard"
            className={getLinkClass}
            onClick={closeMenu}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/profile"
            className={getLinkClass}
            onClick={closeMenu}
          >
            Profile
          </NavLink>

          <NavLink to="/login" className={getLinkClass} onClick={closeMenu}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;