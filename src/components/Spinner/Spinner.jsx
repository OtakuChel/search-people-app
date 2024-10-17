import { CircularProgress } from "@mui/material";
import React from "react";
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.circle}>
      <CircularProgress size={20} />
    </div>
  );
};

export default Spinner;
