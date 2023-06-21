import { NavLink } from "react-router-dom";
import "../assets/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <nav className="flex-container" id="header">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            end
          >
            About
          </NavLink>
        </nav>
      </header>
    </>
  );
}
