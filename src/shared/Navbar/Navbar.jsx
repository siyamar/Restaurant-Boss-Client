import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart()

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .then((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Our Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order Food</Link>
      </li>
      {
        // user ? 'true' : 'false'
        // user? condition? 'double true' : 'one true' : 'false'
      }
      {
        user && isAdmin &&
        <li>
        <Link to={"/dashboard/adminHome"}>Dashboard</Link>
      </li>}
      {
        user && !isAdmin &&
        <li>
        <Link to={"/dashboard/userHome"}>Dashboard</Link>
      </li>}
      <li>
        <Link to={"signUp"}>SignUp</Link>
      </li>
      <li>
        <Link to={"/secret"}>Secret</Link>
      </li>
      <li>
        <Link to={"/dashboard/cart"}>
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          {/* <span>{user?.displayName}</span> */}
          <button onClick={handleLogout} className="btn btn-ghost">
            Logout
          </button>
        </>
      ) : (
        <>
          <li>
            <Link to={"login"}>Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
