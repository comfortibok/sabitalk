import styles from "../styles/homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src="" alt="" />
          </div>

          <nav className={styles.nav} >
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.ctaBtns}>
            <a href="">Log in</a>
            <a href="">Sign Up</a>
          </div>
        </header>
        <section className={styles.heroSection}></section>
      </div>
    </>
  );
};

export default Homepage;
