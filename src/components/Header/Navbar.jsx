import { useState } from "react";
import styles from "./Navbar.module.css";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { CgSun, CgMoon } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../slices/darkModeSlice";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode);

  // for making the mobile navbar
  function toggleScroll(enableScroll) {
    const body = document.body;
    const html = document.documentElement;
    body.style.overflow = html.style.overflow = enableScroll
      ? "auto"
      : "hidden";
  }

  toggleScroll(!mobile);

  return (
    <div className={styles.navbar}>
      <nav className={mobile ? styles.navListMobile : styles.navList}>
        <ScrollLink
          to="home"
          href="#"
          rel="nofollow"
          spy={true}
          smooth={true}
          offset={-100}
          duration={250}
          className={styles.navItem}
          onClick={() => mobile && setMobile(!mobile)}
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="featured"
          href="#"
          rel="nofollow"
          spy={true}
          smooth={true}
          offset={-50}
          duration={250}
          className={styles.navItem}
          onClick={() => mobile && setMobile(!mobile)}
        >
          Featured
        </ScrollLink>
        <ScrollLink
          to="tags"
          href="#"
          rel="nofollow"
          spy={true}
          smooth={true}
          offset={-50}
          duration={250}
          className={styles.navItem}
          onClick={() => mobile && setMobile(!mobile)}
        >
          Tags
        </ScrollLink>
        <ScrollLink
          to="articles"
          href="#"
          rel="nofollow"
          spy={true}
          smooth={true}
          offset={-50}
          duration={250}
          className={styles.navItem}
          onClick={() => mobile && setMobile(!mobile)}
        >
          Articles
        </ScrollLink>
        <ScrollLink
          to="contact"
          href="#"
          rel="nofollow"
          spy={true}
          smooth={true}
          offset={-100}
          duration={250}
          className={styles.navItem}
          onClick={() => mobile && setMobile(!mobile)}
        >
          Contact
        </ScrollLink>
        {mobile && (
          <Link
            to="signin"
            href="#"
            rel="nofollow"
            onClick={() => mobile && setMobile(!mobile)}
            className={styles.signInMobile}
          >
            Sign In
          </Link>
        )}
      </nav>
      <div className={styles.navbarActions}>
        <Search />
        <button
          className={styles.toggleButton}
          aria-label="Toggle between dark and light mode"
          onClick={() => dispatch(toggleDarkMode())}
        >
          {isDarkMode.theme ? <CgSun /> : <CgMoon />}
        </button>
        <Link to="signin" rel="nofollow" className={styles.signInLink}>
          Sign In
        </Link>
      </div>
      <button
        className={styles.mobileIcon}
        onClick={() => setMobile(!mobile)}
        aria-label={mobile ? "Close mobile menu" : "Open mobile menu"}
      >
        {mobile ? <RiCloseFill /> : <RiMenu3Fill />}
      </button>
    </div>
  );
}

export default Navbar;
