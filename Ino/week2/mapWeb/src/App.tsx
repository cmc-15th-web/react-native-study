import styles from "./App.module.css";
import KakaoMap from "./component/KakaoMap";

function App() {
  return (
    <div className={styles.container}>
      <KakaoMap />
    </div>
  );
}

export default App;
