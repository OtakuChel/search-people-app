import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";

import paramsFormatter from "../../utils/formatter";


import { useDispatch } from "react-redux";
import { axiosUsers } from "../redux/users/asyncActions";
import { setFocusData } from "../redux/users/slice";

const Search = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const dispatch = useDispatch();
  const onChangeInput = (event) => {
    setSearchValue(event.target.value);
    updateSearchValue(event.target.value);
    dispatch(setFocusData([]))
  };

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(axiosUsers(paramsFormatter(str)));
    }, 600),
    []
  );
  return (
    <div className={styles.searchBlock}>
      <input
        className={styles.input}
        onChange={(event) => onChangeInput(event)}
        type="text"
        value={searchValue}
        placeholder="Введите Id или имя"
      />
    </div>
  );
};

export default Search;
