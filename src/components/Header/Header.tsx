import { NavLink } from "react-router-dom";
import styles from "./Header.module.css"

const Header = () => {
 
  return (
    <div className={styles.header}>

      <li>
        <a> <NavLink exact to="/" activeClassName={styles.activeLinkLogo}>
          <img className={styles.logo} src="/eindlogo.jpg" alt="Logo" />
        </NavLink></a>
      </li>

      <input type="checkbox" id={styles.nav_toggle} className={styles.nav_toggle} />
      <nav>
        <ul className={styles.menu}>
          <li><a><NavLink exact to="/" activeClassName={styles.activeLink}>Home</NavLink></a></li>
          <li><a><NavLink exact to="/about" activeClassName={styles.activeLink}>About</NavLink></a></li>
          <li><a><NavLink exact to="/cocktail" activeClassName={styles.activeLink}>Cocktails</NavLink></a></li>
          <li><a><NavLink exact to="/category" activeClassName={styles.activeLink}>Category</NavLink></a></li>
          <li><a><NavLink exact to="/Favorites" activeClassName={styles.activeLink}>Favorites</NavLink></a></li>
          <li><a><NavLink exact to="/contact" activeClassName={styles.activeLink}>Contact</NavLink></a></li>
        </ul>
      </nav>
      <label htmlFor={styles.nav_toggle} className={styles.nav_toggle_label}>
        <span></span>
      </label>
    </div>
  );
}

export default Header;