import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import Home from "../Home/Home.jsx";
//import ErrorPage from "../page/ErrorPage";
import Login from "../auth/SignInModal.jsx";
import SignUp from "../auth/SignUpModal.jsx";
import TicketSearchPage from "../Search/Search.jsx";

//import Ticket from "../page/Ticket";
//import CheckoutPage from "../page/CheckoutPage";
import Admin from "../Admin/Admin.jsx";
import AdminLogin from "../Admin/AdminLogin.jsx";
import AddAirline from "../Admin/AddAirline.jsx";
import AddFlight from "../Admin/AddFlight.jsx";
import VerifyTicket from "../Admin/VerifyTicket";
//import VerifyTicketAdmin from "../components/VerifyTicketAdmin";
//import Profile from "../page/Profile";

// ProtectedRoute component to handle admin-only routes
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? <Element {...rest} /> : <Navigate to="/" replace />;
};

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<TicketSearchPage />} />
        {/* <Route path="/book/:id" element={<TicketBooking />} /> */}
        {/* <Route path="/ticket/:ticketId" element={<Ticket />} /> */}
        {/* <Route path="/checkout-page" element={<CheckoutPage />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* Protected admin routes */}
        {/* <Route path="/admin" element={<ProtectedRoute element={Admin} />} /> */}
        {/* <Route path="/adminLogin" element={<AdminLogin />} /> */}
        {/* <Route path="/admin/add-airline" element={<AddAirline />} /> */}
        {/* <Route path="/admin/add-flight" element={<AddFlight />} /> */}
        {/* <Route path="/admin/verify-ticket" element={<VerifyTicket />} /> */}
        <Route
        //   path="/verify-ticket/:ticketId"
        //   element={<VerifyTicketAdmin />}
        />

        {/* Fallback route for unknown paths */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
