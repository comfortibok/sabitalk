import styles from "../styles/homepage.module.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/brand-logo.svg";
import heroImage from "../assets/images/HeroImage.svg";
import footerLogo from "../assets/images/footerLogo.svg";

const Homepage = () => {
  const aboutSection = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src={logo} alt="The brand logo" />
            <p className={styles.logoSubtext}>...like a local</p>
          </div>

          <nav className={styles.nav}>
            <ul>
              <li>
                <Link
                  className={styles.navBtn}
                  to="#about"
                  onClick={() => scrollToSection(aboutSection)}
                >
                  About us
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.ctaBtns}>
            <Link className={styles.secondaryBtn} to="/login">
              Log in
            </Link>
            <Link className={styles.primaryBtn} to="/sign-up">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.heroSectionWrap}>
          <div className={styles.heroSection}>
            <div className={styles.leftHero}>
              <div className={styles.textContainer}>
                <h1 className={styles.heroText}>
                  Speak Your Culture. Learn Nigerian Languages with Ease
                </h1>
                <p className={styles.heroSubtext}>
                  From everyday phrases to deep cultural expressions, master
                  Nigerian languages like Yoruba, Igbo, and Hausa{" "}
                </p>
              </div>
              <Link className={styles.heroBtn} to="/sign-up">
                Sign Up
              </Link>
            </div>
            <div className={styles.rightHero}>
              <img
                src={heroImage}
                alt="An Illustration of a tongue showcasing other laguages "
              />
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} id="about" ref={aboutSection}>
          <h2 className={styles.aboutHeading}>About Us</h2>
          <p className={styles.aboutText}>
            At Speakit, we believe language is more than words—it&#39;s
            identity, culture, and connection. With fewer young people speaking
            Nigeria&#39;s native languages, we created a fun, accessible way to
            learn and love Yoruba, Igbo, Hausa, and more—anytime, anywhere. Our
            mission is to make Nigerian languages easy to learn, engaging to
            practice, and cool to speak again. Whether you're a heritage
            speaker, a curious learner, or a parent teaching the next
            generation, Speakit is for you. We&#39;re passionate educators,
            designers, and cultural advocates working to build a future where
            our languages thrive—in schools, homes, and everyday life.
          </p>
        </section>
      </main>

      <footer>
        <div className={styles.footer}>
          <div>
            <img src={footerLogo} alt="A coloured brand Logo for the footer" />
          </div>
          <Link to="#about" onClick={() => scrollToSection(aboutSection)}>
            About Us
          </Link>
          <div className={styles.inputContainer}>
            <label htmlFor="emailInput" aria-label="Email sign up input">
              <input
                type="email"
                placeholder="Enter your email to sign up"
                id="emailInput"
                name="emailInput"
              />
            </label>
            <button type="submit" className={styles.heroBtn}>
              Submit
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
