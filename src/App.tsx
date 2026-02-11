import { useEffect, useState } from 'react';
import LogForm from './components/LogForm';
import LogList from './components/LogList';
import type { LearningLog } from './types';
import { getLogs, saveLogs } from './utils/storage';
import styles from './App.module.css';

export default function App() {
  const [logs, setLogs] = useState<LearningLog[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setLogs(getLogs());
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    saveLogs(logs);
  }, [logs, isInitialized]);

  const handleAdd = (content: string, time: number) => {
    const newLog: LearningLog = {
      id: Date.now().toString(),
      content,
      time,
    };

    setLogs((prevLogs) => [newLog, ...prevLogs]);
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>学習記録アプリ</h1>

      <div className={styles.panel}>
        <section>
          <h2 className={styles.sectionTitle}>記録を追加</h2>
          <LogForm onAdd={handleAdd} />
        </section>

        <section>
          <h2 className={styles.sectionTitle}>記録一覧</h2>
          <LogList logs={logs} />
        </section>
      </div>
    </main>
  );
}
