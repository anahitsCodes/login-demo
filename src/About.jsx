import {useAuth} from "./AuthContext";
import Spinner from "./Spinner";

function About() {
  const {user, isLoading} = useAuth()

  if (isLoading) return <Spinner/>
  if (!user) return null

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center mb-6">
        <img
          className="w-24 h-24 rounded-full mr-4"
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
        />
        <div>
          <h2 className="text-2xl font-semibold">
            {user.firstName} {user.lastName}
          </h2>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
        <p className="text-sm"><strong>Age:</strong> {user.age}</p>
        <p className="text-sm"><strong>Gender:</strong> {user.gender}</p>
        <p className="text-sm"><strong>Birth Date:</strong> {new Date(user.birthDate).toLocaleDateString()}</p>
        <p className="text-sm"><strong>Blood Group:</strong> {user.bloodGroup}</p>
        <p className="text-sm"><strong>Height:</strong> {user.height} cm</p>
        <p className="text-sm"><strong>Weight:</strong> {user.weight} kg</p>
        <p className="text-sm"><strong>Eye Color:</strong> {user.eyeColor}</p>
        <p className="text-sm"><strong>Hair:</strong> {user.hair.color}, {user.hair.type}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Company</h3>
        <p className="text-sm"><strong>Company:</strong> {user.company.name}</p>
        <p className="text-sm"><strong>Department:</strong> {user.company.department}</p>
        <p className="text-sm"><strong>Title:</strong> {user.company.title}</p>
        <p
          className="text-sm">{user.company.address.address}, {user.company.address.city}, {user.company.address.state} ({user.company.address.stateCode}), {user.company.address.country}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Bank Details</h3>
        <p className="text-sm"><strong>Card Type:</strong> {user.bank.cardType}</p>
        <p className="text-sm"><strong>Card Number:</strong> **** **** **** {user.bank.cardNumber.slice(-4)}</p>
        <p className="text-sm"><strong>Card Expiry:</strong> {user.bank.cardExpire}</p>
        <p className="text-sm"><strong>Currency:</strong> {user.bank.currency}</p>
        <p className="text-sm"><strong>IBAN:</strong> {user.bank.iban}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Crypto Wallet</h3>
        <p className="text-sm"><strong>Coin:</strong> {user.crypto.coin}</p>
        <p className="text-sm"><strong>Wallet Address:</strong> {user.crypto.wallet}</p>
        <p className="text-sm"><strong>Network:</strong> {user.crypto.network}</p>
      </div>
    </div>
  );
}

export default About;