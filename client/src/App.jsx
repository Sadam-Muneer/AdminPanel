import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Service } from "./pages/Service.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { Footer } from "../src/components/Footer.jsx";
import { Error } from "./pages/Error.jsx";
import { Logout } from "./pages/Logout.jsx";
import Navbarr from "../src/components/Navbarr.jsx";
import Adminlayout from "./components/layouts/Admin-layout.jsx";
import AdminContacts from "./pages/AdminContacts.jsx";
import UsersOfAdmin from "./pages/UsersOfAdmin.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          {/* Nested Route */}
          <Route path="/admin" element={<Adminlayout />}>
            <Route path="users" element={<UsersOfAdmin />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
