import React from "react";
import "./frontpage.css";

const Frontpage = ({ DialogContext }) => {
  return (
    <section className="frontpage">
      <div className="darklayout">
        <a href="mailto:ayetigbosamuel01@gmail.com" className="need">
          Need a professional website?
        </a>
        <div className="note">
          <q>Start the journey to find your soul mate.</q>
        </div>
      </div>
    </section>
  );
};

export default Frontpage;
