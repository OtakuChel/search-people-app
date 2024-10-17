import React from "react";
import styles from './Header.module.scss';
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.appNameWrapper}>
        <h1 className={styles.appName}>Жилфонд</h1>
      </div>
      <div className={styles.usernameWrapper}>
        <p className={styles.username}>Пользователь</p>
      </div>
    </div>
  );
};

export default Header;
