import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav">
      <div className="nav-brand">Coffee R Us</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
