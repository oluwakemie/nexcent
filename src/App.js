import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Clients from "./component/Clients";
import Footer from "./component/footer";

function App() {
  return (
    <div >
      <div className="px-[12px] md:px-[60px] lg:px-[130px] bg-gray-100 shadow">
        <Navbar />
      </div>
      <div className="px-[12px] md:px-[60px] lg:px-[120px] bg-[#E0E0E0] 
      ">
      <Hero/>
    </div>
    <div className=" px-[12px] md:px-[60px] lg:px-[120px]">
      <Clients/>
    </div>
    <div className="bg-black w-full h-full mt-10">
      <Footer/>
    </div>
    </div>
    
  );
}
export default App;
