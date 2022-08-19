import React from "react";
import { useContext } from "react";
import "./retry.css";
import html2canvas from "html2canvas";
import { getResult } from "./func/getResult";

const Retry = ({ DialogContext }) => {
  const msg = [
    "Start",
    "Second Shuffle",
    "Last Shuffle",
    "Show Result",
    "Download Result",
  ];
  const {
    setShowDialog,
    setShowRetry,
    setPopNames,
    getNames,
    name,
    setName,
    treatName,
    gender,
    tryTimes,
    setTryTimes,
    namesCollection,
    setNamesCollection,
    setSubmitStatus,
    setIsPrint,
    componentRef,
    isLoading,
    setIsLoading,
  } = useContext(DialogContext);
  const handleDownloadImage = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");
    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };
  return (
    <div className="btngroup">
      <button
        disabled={isLoading === 2}
        onClick={() => {
          if (tryTimes < 3) {
            setIsLoading(2);
            const randomLoadSec = Math.floor(Math.random() * 7) + 4;
            const luckyNames = getNames(treatName(name), gender, setPopNames);
            setNamesCollection((prevNames) => {
              return [...prevNames, luckyNames];
            });
            setTryTimes(tryTimes + 1);
            setTimeout(() => {
              setIsLoading(1);
            }, randomLoadSec * 1000);
          } else if (tryTimes < 4) {
            //For showing results
            setIsLoading(2);
            setTryTimes(tryTimes + 1);
            setPopNames(getResult(namesCollection));
            setTimeout(() => {
              setIsLoading(1);
            }, 3000);
            console.log("showResult");
          } else {
            handleDownloadImage();
          }
        }}
      >
        {isLoading === 2 ? "Loading..." : msg[tryTimes]}
      </button>
      <button
        onClick={() => {
          setShowRetry(false);
          setShowDialog(true);
          setPopNames([]);
          setTryTimes(0);
          setNamesCollection([]);
          setName("");
          setSubmitStatus(false);
          setIsPrint(false);
        }}
      >
        Try Again With Another Name
      </button>
      <button
        onClick={() => {
          if (navigator.share) {
            navigator
              .share({
                title: "Find Your Soul Mate Now!",
                url: "https:lifelovematch.netlify.app",
              })
              .then(() => {
                //DO nothing
              })
              .catch((error) => {
                //DO nothing
              });
          } else {
            const textField = document.createElement("textarea");
            textField.innerText = "https:lifelovematch.netlify.app";
            document.body.appendChild(textField);
            textField.select();
            document.execCommand("copy");
            textField.remove();
          }
        }}
      >
        Share Link
      </button>
    </div>
  );
};

export default Retry;
