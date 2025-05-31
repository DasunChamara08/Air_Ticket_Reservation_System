// import React from "react";

// import Search from "./Component/Search/Search.jsx";
// import Home from "./Component/Home/Home.jsx"
// import Support from "./Component/Support/Support.jsx";
// import Navbar from "./Component/Navbar/Navbar.jsx";
// import Subscribers from "./Component/Subscribers/Subscribers.jsx"
// import Footer from "./Component/Footer/Footer.jsx";
// import Information from "./Component/Information/Information.jsx";
// import Slider from "./Component/Slider/Slider.jsx";
// import AppRoute from "./Component/Routes/AppRoues.jsx"




// const App =() =>{
//   return(
//     <div>
//       <Navbar/>
//       <Home />
//       <Search/>
//       <Support/>
//       <Subscribers/>
//       <Information />
//       <Footer />
//       <Slider />
//       {/* <AppRoute /> */}
      
      
//     </div>
//   )


  

//   const App = () => {
//     const [showModal, setShowModal] = useState(false);
  
//     return (
//       <div>
//         <button onClick={() => setShowModal(true)}>Sign In</button>
//         {showModal && <SignInModal close={() => setShowModal(false)} />}
//       </div>
//     );
//   };


// }

// export  default App

// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Search from "./Component/Search/Search.jsx";
import Home from "./Component/Home/Home.jsx";
import Support from "./Component/Support/Support.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Subscribers from "./Component/Subscribers/Subscribers.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Information from "./Component/Information/Information.jsx";
import Slider from "./Component/Slider/Slider.jsx";
import FlightBooking from "./Component/FlightBooking/FlightBooking.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Search />
              <Support />
              <Subscribers />
              <Information />
              <Slider />
            </>
          }
        />

          <Route path="/booking" element={<FlightBooking />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
