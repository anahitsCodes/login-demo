import Header from "./Header";
import Login from "./Login";
import {Outlet} from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="font-roboto min-h-screen flex flex-col">
      <Header/>
      <main className="flex-grow bg-gray-200 flex justify-center items-center">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default AppLayout;