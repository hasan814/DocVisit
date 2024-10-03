import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // ============= Navigate ===============
  const navigate = useNavigate();

  // ============= State ===============
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  // ============= Rendering ===============
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <Link to="/">
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/color/100/examination.png"
          alt="examination"
        />
      </Link>
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to={"/"}>
          <li className="py-1">HOME</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">ALL DOCTORS</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">ABOUT</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
        <NavLink to={"/contact"}>
          <li className="py-1">CONTACT</li>
          <hr className="hidden border-none outline-none h-0.5 bg-primary w-3/5 m-auto" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 curser-pointer group relative">
            <img
              width="30"
              height="30"
              className="rounded-full w-8"
              src="https://img.icons8.com/color/96/gender-neutral-user.png"
              alt="gender-neutral-user"
            />
            <img
              width="30"
              height="30"
              className="w-8"
              src="https://img.icons8.com/material-rounded/50/expand-arrow.png"
              alt="expand-arrow"
            />
            <div
              className="
                    top-0 
                    z-20 
                    hidden 
                    pt-14 
                    right-0 
                    absolute 
                    text-base 
                    font-medium 
                    text-gray-600
                    group-hover:block
                "
            >
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 border-r">
                <p
                  onClick={() => navigate("/profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="
                px-8
                py-3 
                hidden
                md:block
                rounded-full
                bg-primary
                text-white 
                duration-300
                font-semibold
                transition-all
                hover:bg-transparent
                hover:text-primary
          "
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
