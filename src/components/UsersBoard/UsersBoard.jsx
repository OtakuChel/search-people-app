import React from "react";
import styles from "./UsersBoard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setFocusData } from "../redux/users/slice.js";
import avatar from "../../img/Rectangle 4.png";
import Spinner from "../Spinner/Spinner.jsx";

const UsersBoard = () => {
  const usersData = useSelector((state) => state.search.searchData);
  const responseStatus = useSelector((state) => state.search.status);
  const errorMessage = useSelector((state) => state.search.error);
  const dispatch = useDispatch();

  const clickHandler = (id) => {
    const focusObject = usersData.find((obj) => obj.id === id);

    dispatch(setFocusData(focusObject));
  };

  if (responseStatus === "error") {
    <div className={styles.userBoardWrapper}>
      <h4 className={styles.blockText}>Результаты</h4>
      <div className={styles.boardDescription}>Ошибка: {errorMessage}</div>
    </div>;
  }

  return (
    <div className={styles.userBoardWrapper}>
      <h4 className={styles.blockText}>Результаты</h4>

      {usersData.length == 0 && responseStatus == "none" ? (
        <div className={styles.boardDescription}>начните поиск</div>
      ) : usersData.length == 0 && responseStatus == "loading" ? (
        <div className={styles.boardDescription}>
          <Spinner /> Загрузка...
        </div>
      ) : usersData.length > 0 && responseStatus == "success" ? (
        usersData.map((obj) => {
          return (
            <div
              className={styles.userBlock}
              key={obj.id}
              onClick={() => clickHandler(obj.id)}
            >
              <img src={avatar} />
              <span className={styles.horizontalLine}></span>
              <div className={styles.userInfo}>
                <h4 className={styles.username}>{obj.username}</h4>
                <p className={styles.userMail}>{obj.email}</p>
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.boardDescription}>ничего не найдено</div>
      )}
    </div>
  );
};

export default UsersBoard;
