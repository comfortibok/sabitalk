import "../App.css";
import bgImg from "../assets/ellipse/Ellipse.png";
import bgImgOne from "../assets/ellipse/Ellipse 662.png";
import bgImgTwo from "../assets/ellipse/Ellipse 663.png";
import bgImgThree from "../assets/ellipse/Ellipse 664.png";
const SabiTalkLayout = () => {
  return (
    <section
      className="leftPaneContainer"
      role="region"
      aria-labelledby="mainTitle"
    >
      <div className="bg-img-container">
        <div className="bg-img-content">
          <div className="bg-image">
            <img src={bgImg} alt="Ellipse" />
          </div>{" "}
          <div className="bg-image">
            <img src={bgImgOne} alt="Ellipse" />
          </div>{" "}
          <div className="bg-image">
            <img src={bgImgThree} alt="Ellipse" />
          </div>
          <div className="bg-image">
            <img src={bgImgTwo} alt="Ellipse" />
          </div>
        </div>
      </div>
      <div className="leftPaneContent">
        <h1 className="mainTitle">Speak It</h1>
        <p className="subtitle">...like a local</p>
        <h2>Master Nigerian languages in a fun and interactive way</h2>
        <p className="subtext">
          Play games, track your progress, and level up your fluency—one word at
          a time
        </p>
      </div>
    </section>
  );
};

export default SabiTalkLayout;
