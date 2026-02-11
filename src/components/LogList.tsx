import type { LearningLog } from '../types';
import styles from './LogList.module.css';

type LogListProps = {
  logs: LearningLog[];
};

export default function LogList({ logs }: LogListProps) {
  if (logs.length === 0) {
    return <p className={styles.empty}>まだ記録がありません。</p>;
  }

  return (
    <ul className={styles.list}>
      {logs.map((log) => (
        <li key={log.id} className={styles.item}>
          <p className={styles.content}>{log.content}</p>
          <p className={styles.time}>学習時間: {log.time} 時間</p>
        </li>
      ))}
    </ul>
  );
}
