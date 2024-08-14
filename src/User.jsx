import {useAuth} from "./AuthContext";
import Spinner from "./Spinner";

function User() {

  const {user, isLoading} = useAuth();

  if (isLoading) return <Spinner/>

  console.log(user)
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to your Dashboard, {user?.firstName}!
      </h1>
    </div>
  );
}

export default User;