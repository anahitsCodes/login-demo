import {useState} from "react";
import {NavLink} from "react-router-dom";
import {CiMenuKebab} from "react-icons/ci";
import {useAuth} from "./AuthContext";

function MenuButton() {

  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block ">
      <button
        onClick={toggleMenu}
        className="inline-flex justify-center w-full rounded-md border border-[#66837E] shadow-sm px-4 py-2 bg-white text-sm font-medium text-[#66837E] hover:bg-gray-50 focus:outline-none "
      >
        <CiMenuKebab/>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 flex flex-col items-center text-[#66837E]">
            <NavLink to='/home'>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuButton;

