import styles from "./App.module.scss";

import IdeaBooster from "pages/IdeaBooster";

const App: any = () => {
  return (
    <div className={styles.app}>
      <IdeaBooster />
    </div>
  );
};

export default App;
