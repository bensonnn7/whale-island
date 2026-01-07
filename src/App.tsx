import { SceneRoot } from "./components/SceneRoot";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.canvasWrapper}>
        <SceneRoot />
      </div>
    </div>
  );
}

export default App;
