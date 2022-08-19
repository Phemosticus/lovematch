import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Dialog from "./dialog";
import Info from "./info";
import Output from "./output";
import Frontpage from "./frontpage";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { getNames } from "./func/getNames";
import { treatName } from "./func/treatName";

const DialogContext = React.createContext();

function App() {
  const componentRef = useRef();
  const [dialog, setShowDialog] = useState(true);
  const [retry, setShowRetry] = useState(false);
  const [popNames, setPopNames] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("female");
  const [tryTimes, setTryTimes] = useState(0);
  const [namesCollection, setNamesCollection] = useState([]);
  const [page, setPage] = useState(1);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(0);
  const [isPrint, setIsPrint] = useState(false);

  const UpButton = () => {
    return (
      <button className="uppage" onClick={() => setPage(page - 1)}>
        <ExpandLessIcon />
      </button>
    );
  };

  const DownButton = () => {
    return (
      <button className="downpage" onClick={() => setPage(page + 1)}>
        <ExpandMoreIcon />
      </button>
    );
  };

  useEffect(() => {
    document
      .getElementById("app")
      .scrollTo(document.documentElement.clientWidth * (page - 1), 0);
  }, [page]);

  return (
    <DialogContext.Provider
      value={{
        setShowDialog,
        retry,
        setShowRetry,
        popNames,
        setPopNames,
        getNames,
        name,
        setName,
        gender,
        setGender,
        treatName,
        tryTimes,
        setTryTimes,
        namesCollection,
        setNamesCollection,
        setPage,
        submitStatus,
        setSubmitStatus,
        componentRef,
        isLoading,
        setIsLoading,
        isPrint,
        setIsPrint,
      }}
    >
      <div className="app" id="app">
        <Frontpage DialogContext={DialogContext} />

        <Info DialogContext={DialogContext} />
        {dialog ? (
          <Dialog DialogContext={DialogContext} />
        ) : (
          <Output ref={componentRef} DialogContext={DialogContext} />
        )}
        {page > 1 && <UpButton />}
        {page < 3 && <DownButton />}
      </div>
    </DialogContext.Provider>
  );
}

export default App;
