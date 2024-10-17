import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import styles from "./Home.module.scss";
import UserInfo from "../../UserInfo/UserInfo";
import { useSelector } from "react-redux";

const Home = () => {
  const focusData = useSelector((state) => state.search.focusData);
  console.log("fD", focusData, focusData.length);

  return (
    <div className={styles.wrapperHome}>
      <div className={styles.sidebarBlock}>
        <Sidebar />
      </div>
      <span className={styles.horizontalLine}></span>
      <div className={styles.infoBlock}>
        {focusData.length != 0 ? (
          <UserInfo />
        ) : (
          <div className={styles.descriptionInfoBlock}>
            <p className={styles.userInfoText}>
              Выберите сотрудника, чтобы посмотреть его профиль
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
