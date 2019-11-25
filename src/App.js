import React from 'react';
import styles from './App.module.scss';
import ItemList from './components/ItemsList/ItemsList';

function App() {
  return (
    <div className={styles.app}>
      <ItemList />
    </div>
  );
}

export default App;
