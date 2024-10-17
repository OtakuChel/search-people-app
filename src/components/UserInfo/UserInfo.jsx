import React from "react";
import styles from "./UserInfo.module.scss";
import { useSelector } from "react-redux";
import avatar from "../../img/Rectangle 4.png";

const UserInfo = () => {
  const focusData = useSelector((state) => state.search.focusData);
  return (
    <div className={styles.userFullIfo}>
      <img src={avatar} />
      <div className={styles.userInfo}>
        <div className={styles.textBlock}><p></p><h4 className={styles.name}>{focusData.name}</h4></div>
        <div className={styles.textBlock}><p>email:</p><p className={styles.userMail}>{focusData.email}</p></div>
        <div className={styles.textBlock}><p>phone:</p><p className={styles.phone}>{focusData.phone}</p></div>
        <div className={styles.textBlockAboutMe}><p className={styles.aboutMe}>О себе:</p><p className={styles.aboutMeInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p></div>
        
        
      </div>
    </div>
  );
};

export default UserInfo;
