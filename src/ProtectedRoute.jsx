import Spinner from "./Spinner.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useAuth} from "./AuthContext";

function ProtectedRoute({children}) {
  const {isLoaded, isLoading, user} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user && !isLoading) {
      navigate('/login')
    }
  }, [isLoading, user, navigate]);

  if (isLoading) return <Spinner/>

  if (user) return children
}

export default ProtectedRoute;