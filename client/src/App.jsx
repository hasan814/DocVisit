import { Route, Routes } from "react-router-dom";

import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/Doctors";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Header from "./components/layouts/Header";
import Login from "./pages/Login";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
