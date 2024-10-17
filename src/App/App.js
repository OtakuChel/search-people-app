import Home from "../components/pages/Home/Home";
import Header from "../components/Header/Header";
import styles from './App.module.scss'


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
