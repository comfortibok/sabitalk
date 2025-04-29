import "../App.css";

const SabiTalkLayout = () => {
  return (
    <section
      className="leftPaneContainer"
      role="region"
      aria-labelledby="mainTitle"
    >
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
