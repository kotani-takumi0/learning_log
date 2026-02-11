import type { LearningLog } from '../types';

const STORAGE_KEY = 'learning-logs';

export function getLogs(): LearningLog[] {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as LearningLog[];
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  } catch {
    return [];
  }
}

export function saveLogs(logs: LearningLog[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
}
