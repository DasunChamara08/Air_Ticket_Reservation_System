import React from "react";
import Home from "./Component/Home/Home";
import Search from "./Component/Search/Search";
import Support from "./Component/Support/Support";
import Navbar from "./Component/Navbar/Navbar";
import Subscribers from "./Component/Subscribers/Subscribers"
import Footer from "./Component/Footer/Footer";
import Information from "./Component/Information/Information";
import Slider from "./Component/Slider/Slider";
//import AdminPanel from "./Component/AdminPanel/AdminPanel";




const App =() =>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <Search/>
      <Support/>
      <Subscribers/>
      <Information />
      <Footer />
      <Slider />
            
      
    </div>
  )


  

  const App = () => {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <div>
        <button onClick={() => setShowModal(true)}>Sign In</button>
        {showModal && <SignInModal close={() => setShowModal(false)} />}
      </div>
    );
  };


}

export  default App