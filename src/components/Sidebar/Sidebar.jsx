import React from "react";
import Search from "../Search/Search";
import UsersBoard from "../UsersBoard/UsersBoard";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.sidebarName}>
        <h2>Поиск сотрудников</h2>
      </div>
      <Search />
      <UsersBoard />
    </div>
  );
};

export default Sidebar;
