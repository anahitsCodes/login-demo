import Button from "./Button";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "./AuthContext";
import MiniSpinner from "./MiniSpinner";

function Login() {
  const [error, setError] = useState(null)

  const {login, isLoading} = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password')

    try {
      await login(email, password);
      navigate('/home');
    } catch (err) {
      if (err.message) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input name="email" required
                 className="mt-1 block w-full px-4 py-2 border border-[#66837E] rounded"
                 placeholder="email@example.com"/>
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input type="password" name="password" required
                 className="mt-1 block w-full px-4 py-2 border border-[#66837E] rounded"/>
        </div>
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
        <div className="flex justify-end gap-4">
          <Button type="button" bgColor='' textColor='text-[#66837E]'>Cancel</Button>
          <Button bgColor='bg-[#66837E]' disabled={isLoading} textColor='text-[#ffffff]'
                  type='submit'>{isLoading ? <MiniSpinner/> : 'Login'}</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;