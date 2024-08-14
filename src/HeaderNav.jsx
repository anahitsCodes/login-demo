import {NavLink} from "react-router-dom";
import {useAuth} from "./AuthContext";


function NavLinkButton(navLinkProps) {

  return (
    <NavLink
      {...navLinkProps}
      className={({isActive}) => `${isActive ? "bg-[#66837E] text-gray-50" : ''} px-6 py-2 text-[#66837E]`}
    />
  )
}

function HeaderNav() {

  return (
    <ul className="ml-4 hidden md:flex border-[#66837E] border-[1px] rounded-full overflow-hidden ">
      <NavLinkButton to='/home'>Home</NavLinkButton>
      <NavLinkButton to="/about">About</NavLinkButton>
      <NavLinkButton to="/contact">Contact</NavLinkButton>
    </ul>

  )
    ;
}

export default HeaderNav;