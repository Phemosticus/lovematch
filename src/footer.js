import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span>&copy;</span>Life {new Date().getFullYear()} || Dedicated to my
      Mum💖
    </div>
  );
};

export default Footer;
