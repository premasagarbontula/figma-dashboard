import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Compute total cart quantity
  const cartQuantity = useSelector((state) =>
    state.cart.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  const navItems = ["Shop", "Explore", "About", "Rewards", "Contact"];

  return (
    <nav className="w-full px-4 md:px-16 py-3 flex items-center justify-between relative bg-[#fbf9f6] sticky top-0 z-50 shadow-md">
      {/* Mobile Hamburger */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#4a4a4a] text-2xl focus:outline-none cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Left */}
      <div className="hidden md:flex items-center gap-12">
        <NavLink
          to="/special"
          className="px-4 py-2 text-[#4a4a4a] rounded-full font-semibold bg-yellow-400 hover:bg-yellow-500 transition cursor-pointer"
        >
          WHICH MANUKA IS FOR ME?
        </NavLink>

        <ul className="hidden md:flex items-center gap-12">
          {navItems.slice(0, 2).map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "text-[#4a4a4a]"
                  } text-xl`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Logo */}
      <Link to="/" className="flex items-center mx-auto md:mx-0">
        <img
          src="src/assets/NZ_Honey_Co_Logo.png"
          alt="Brand Logo"
          className="h-20 w-auto"
        />
      </Link>

      {/* Desktop Right Icons */}
      <div className="flex items-center gap-5">
        <ul className="hidden md:flex items-center gap-12 mr-10">
          {navItems.slice(2).map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `hover:text-yellow-400 transition ${
                    isActive
                      ? "text-yellow-400 font-semibold"
                      : "text-[#4a4a4a]"
                  } text-xl`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <NavLink
          to="/account"
          className="text-[#4a4a4a] hover:text-yellow-400 cursor-pointer"
          aria-label="User Account"
        >
          <FaUser size={25} />
        </NavLink>

        <NavLink
          to="/search"
          className="text-[#4a4a4a] hover:text-yellow-400 cursor-pointer"
          aria-label="Search"
        >
          <FaSearch size={25} />
        </NavLink>

        <NavLink
          to="/cart"
          className="relative flex items-center justify-center text-[#4a4a4a] hover:text-yellow-400 cursor-pointer"
          aria-label="Shopping Cart"
        >
          <IoBagOutline size={25} />
          {cartQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[#4a4a4a] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartQuantity}
            </span>
          )}
        </NavLink>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#fbf9f6] z-50 flex flex-col">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className="flex justify-between items-center px-6 py-4 text-[#4a4a4a] hover:text-yellow-400 border-b border-[#4a4a4a] last:border-none"
            >
              {item}
            </NavLink>
          ))}

          {/* Bottom Button */}
          <div className="px-6 py-6 flex justify-center border-t border-[#4a4a4a]">
            <NavLink
              to="/special"
              className="px-4 py-2 text-[#4a4a4a] rounded-full font-semibold bg-yellow-400 hover:bg-yellow-500 transition cursor-pointer"
            >
              WHICH MANUKA IS FOR ME?
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
