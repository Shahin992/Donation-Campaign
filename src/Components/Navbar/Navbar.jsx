import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar justify-between items-center bg-base-100">
        <div className="flex-1">
          <div>
            <img
              className="w-[70%]"
              src="https://i.ibb.co/kypTxxP/Logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="md: font-semibold  md:text-2xl mr-5">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] text-lg font-bold underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="md: font-semibold  md:text-2xl mr-5">
              <NavLink
                to="/Donation"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] text-lg font-bold underline"
                    : ""
                }
              >
                Donation
              </NavLink>
            </li>
            <li className="md: font-semibold  md:text-2xl mr-5">
              <NavLink
                to="/Statistics"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-[#FF444A] text-lg font-bold underline"
                    : ""
                }
              >
                Statistics
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
