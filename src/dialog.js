import React from "react";
import { useContext } from "react";
import "./dialog.css";
import Footer from "./footer";

const Dialog = ({ DialogContext }) => {
  const {
    setShowDialog,
    setShowRetry,
    treatName,
    name,
    setName,
    gender,
    setGender,
    setSubmitStatus,
    setIsLoading,
  } = useContext(DialogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let treatedName = treatName(name);
    if (treatedName.length > 0) {
      setShowDialog(false);
      //   getNames(treatedName, gender, setPopNames);
      setShowRetry(true);
      setSubmitStatus(true);
      setIsLoading(0);
    } else {
      console.log("Write something");
    }
  };

  return (
    <div className="forms">
      <a href="tel:+2348149120163" className="need">
        Need a professional website?
      </a>
      <div className="title">Fill, and let's find you Love.</div>
      <form>
        <div className="row">
          <div className="col-lg-12 col-sm-12 input">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="col-lg-12 col-sm-12 input">
            <span className="genderlabel">Your Gender: </span>
            <div>
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                checked={"female" === gender}
                className="form-check-input"
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                checked={"male" === gender}
                className="form-check-input"
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <center>
              <input
                type="submit"
                value="Start your search"
                onClick={handleSubmit}
                className="btn btn-info submit"
              />
            </center>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Dialog;
