import { NavLink, Outlet } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import { FaUsers, FaHome, FaRegListAlt } from "react-icons/fa";
const Adminlayout = () => {
  return (
    <div>
      <header>
        <div className="container ">
          <nav className="d-flex justify-content-between align-items-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-3">
                <li className="list-inline-item mx-3">
                  <NavLink to="/">
                    <FaHome className="mx-3 fs-1" />
                    Home
                  </NavLink>
                </li>
                <NavLink to="users">
                  <FaUsers className="mx-3 fs-1" />
                  Users
                </NavLink>
              </li>
              <li className="list-inline-item mx-3">
                <NavLink to="contacts">
                  <FaMessage className="mx-3 fs-1" />
                  Contact
                </NavLink>
              </li>
              <li className="list-inline-item mx-3">
                <NavLink to="/service">
                  <FaRegListAlt className="mx-3 fs-1" />
                  Services
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Adminlayout;
