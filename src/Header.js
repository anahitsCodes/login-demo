import {Link, NavLink, useLocation, useNavigate} from "react-router-dom";
import Button from "./Button";
import HeaderNav from "./HeaderNav";
import MenuButton from "./MenuButton";
import {useAuth} from "./AuthContext";


function Header() {
  const {user, logout} = useAuth()
  const navigate = useNavigate();

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300">
            <img alt='user-img' src={user ? user.image : 'default-user.jpg'}/>
          </div>

          <div className="hidden sm:inline-block">
            <HeaderNav/>
          </div>

        </div>
        <div className='sm:hidden'>
          <MenuButton/>
        </div>
        <div className="hidden sm:inline-block">
          <Link to="/">
            {user ? <Button type='button' bgColor='bg-red-500' textColor='text-gray-50' onClick={handleLogout}>Log
              Out</Button> : <Button textColor={'text-gray-50'} bgColor={'bg-[#66837E]'} type='button'>Login</Button>}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;