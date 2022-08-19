import "./info.css";
import Card from "./card";
const Info = ({ DialogContext }) => {
  const options = [
    "If no name appear twice in shuffling, you were probably destined to be single. You could try again though. Who knows?",
    "If name appear twice in shuffling, relationship with this person will last.",
    "If name appear thrice or more in shuffling, relationship with this person was destined.",
  ];
  const colors = ["#DC143C", "#F0E68C", "#3CB371"];
  return (
    <div className="info">
      <a href="mailto:ayetigbosamuel01@gmail.com" className="need">
        Need a professional website?
      </a>
      <div className="row justify-content-between">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <center>
            <Card writeUp="Love is beautiful" />
          </center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <center>
            <Card writeUp="Love is gorgeous" />
          </center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <center>
            <Card writeUp="Love is awesome" />
          </center>
        </div>
      </div>
      <section className="write-up">
        <article className="looking">
          <div>You're searching, aren't you?</div>
        </article>
        <article>
          <div className="instruc">
            Safe chances are one of the names you'll discover here will be your
            soulmate's name. All you have to do is shuffle thrice and find your
            Loml. The top name in the final computed result is your best shot at
            true love. You're welcome.
          </div>
          <div className="row justify-content-between options">
            {options.map((option, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div className="optiondiv">
                    <div
                      className="colorbar"
                      style={{ backgroundColor: colors[index] }}
                    ></div>
                    <div className="option">{option}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Info;
