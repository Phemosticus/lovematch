import React, { useContext } from "react";
import loading from "./assets/img/loading.gif";
import ready from "./assets/img/ready.png";
import { getNumberOfApperance } from "./func/getNumberOfAppearance";
import Retry from "./retry";
import "./output.css";
const Output = React.forwardRef((props, ref) => {
  const { retry, popNames, namesCollection, isLoading } = useContext(
    props.DialogContext
  );
  // Loading status 0: Hasnt started shuffling at all, 1: Result has arrived, 2: Waiting for result
  return (
    <div className="output">
      <a
        href="mailto:ayetigbosamuel01@gmail.com"
        className="need"
        alt="Life Tech"
      >
        Need a professional website?
      </a>
      <div className="outputcontent" ref={ref}>
        {isLoading === 0 ? (
          <div className="ready">
            <img src={ready} alt="ready..." />
          </div>
        ) : isLoading === 1 ? (
          <div className="tables">
            <table className="table table-striped table-dark table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">2022 Potential Loml</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {popNames.map((eachName, index) => {
                  const appearance = getNumberOfApperance(
                    eachName[0],
                    namesCollection
                  );
                  return (
                    <tr key={index}>
                      <th scope="row">{eachName[1]}</th>
                      <td>{eachName[0]}</td>
                      <td>{appearance}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="loading">
            <img src={loading} alt="loading..." />
          </div>
        )}

        {retry && <Retry DialogContext={props.DialogContext} />}
      </div>
    </div>
  );
});

export default Output;
