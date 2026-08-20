import { NavLink } from "react-router-dom";

function Navbar() {
  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header>
      <nav>
        <div className="nav-brand">Campus Connect</div>

        <div className="nav-links">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>

          <NavLink to="/dashboard" className={getLinkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>

          <NavLink to="/login" className={getLinkClass}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;