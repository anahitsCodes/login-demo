import {useAuth} from "./AuthContext";

function Contact() {
  const {user} = useAuth()

  const userContacts = {
    address: user?.address.address,
    phone: user?.phone,
    email: user?.email
  }

  return (

    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-lg text-gray-700 mb-2">
        <strong>Address:</strong> {userContacts.address}
      </p>
      <p className="text-lg text-gray-700 mb-2">
        <strong>Phone:</strong> {userContacts.phone}
      </p>
      <p className="text-lg text-gray-700">
        <strong>Email:</strong> {userContacts.email}
      </p>
    </div>
  )
}

export default Contact;