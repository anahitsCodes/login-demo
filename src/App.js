import Header from "./Header";
import Login from "./Login";
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import AppLayout from "./AppLayout";
import PageNotFound from "./PageNotFound";
import User from "./User";
import {AuthProvider} from "./AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Navigate replace to={"home"}/>}/>
            <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
            <Route path="/contact" element={<ProtectedRoute><Contact/></ProtectedRoute>}/>
            <Route path="/home" element={<ProtectedRoute><User/></ProtectedRoute>}/>
            <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </AuthProvider>

  )
    ;
}

export default App;
