# Learning Log UI

ブラウザ上で完結する学習記録メモアプリです。  
バックエンドを用意せず、フロントエンド技術のみで学習内容の入力・表示・永続化を行います。

## Features

- 学習内容（テキスト）を入力して記録を追加
- 学習時間を入力して記録に紐づけ
- 追加済みの学習記録をリスト形式で一覧表示
- 最新の記録が分かる形で表示
- LocalStorage を使ってブラウザ内にデータを保存
- ページのリロードやブラウザ再起動後も記録を保持

## Tech Stack

| カテゴリ | 使用技術 |
| :--- | :--- |
| Language | TypeScript |
| Library | React |
| Build Tool | Vite |
| Storage | LocalStorage |
| Styling | CSS Modules |

## データ構造

```typescript
interface LearningLog {
  id: string;
  content: string;
  time: number;
}
```

## Getting Started

```bash
npm install
npm run dev
```
