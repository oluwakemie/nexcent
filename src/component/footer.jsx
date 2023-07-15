import React from "react";

const Footer = () => {
  return (
    <div className="px-20 py-20 text-[#F5F7FA] flex flex-col gap-4 justify-around md:flex-row">
      <div className="text-[#F5F7FA] text-[9px]  leading-3 font-extralight  ">
        <img src="/Images/Logo.svg" alt="logo" className="mb-9" />
        <p>Copyright @ 2020 Landify UI Kit</p>
        <p>All rights reserved</p>
        <div className="flex items-center mt-9 gap-2">
          <img src="Images/Social_Icons4.svg" alt="" />
          <img src="Images/Social_Icons.svg" alt="" />
          <img src="Images/Social_Icons2.svg" alt="" />
          <img src="Images/Social_Icons3.svg" alt="" />
        </div>
      </div>

      <div>
        <h1 className="font-medium mb-5">Company</h1>
        <div className="font-thin text-[10px] leading-5 ">
          <p>About Us</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>
      </div>
      <div>
        <h1 className="font-medium mb-5">Support</h1>
        <div className="font-thin text-[10px] leading-5 ">
          <p>Help Center</p>
          <p>Terms and Services</p>
          <p>Legal</p>
          <p>Privacy Policy</p>
          <p>Status</p>
        </div>
      </div>
      <div>
        <h1 className="font-medium mb-5">Stay up to date</h1>
        <div className="w-[150px] h-[20px] bg-gray-700 rounded-sm font-thin text-[8px] px-5  ">
          {" "}
          Your email address 
        </div>
      </div>
    </div>
  );
};

export default Footer;
