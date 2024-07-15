import styles from "./header.module.scss";
import Logo from "../../assets/header/Logo.svg?react";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.header__content}>
          <div className={styles.header__logoContainer}>
            <Logo className={styles.header__logo} />
          </div>
          <div className={styles.header__menu}>
            <div>Dashboard</div>
            <div>About Us</div>
            <div>FAQ</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
