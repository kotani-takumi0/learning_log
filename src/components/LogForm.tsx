import { FormEvent, useState } from 'react';
import styles from './LogForm.module.css';

type LogFormProps = {
  onAdd: (content: string, time: number) => void;
};

export default function LogForm({ onAdd }: LogFormProps) {
  const [content, setContent] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedContent = content.trim();
    const parsedTime = Number(time);

    if (!trimmedContent || !Number.isFinite(parsedTime) || parsedTime <= 0) {
      return;
    }

    onAdd(trimmedContent, parsedTime);
    setContent('');
    setTime('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="content">学習内容</label>
        <input
          id="content"
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="例: ReactのuseEffectを学習"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="time">学習時間 (h)</label>
        <input
          id="time"
          type="number"
          min="0.1"
          step="0.1"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          placeholder="例: 1.5"
          required
        />
      </div>

      <button className={styles.submitButton} type="submit">
        追加
      </button>
    </form>
  );
}
