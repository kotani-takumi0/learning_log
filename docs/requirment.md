# Learning Log UI - 要件定義書 (Requirements Document)

## 1. プロジェクト概要
ブラウザ上で完結する「学習記録メモ帳」。
サーバーサイド（バックエンド）を構築せず、フロントエンド技術のみで学習内容の入力・表示・永続化（データ保存）を実現する。

## 2. 機能要件 (Functional Requirements)

### 2.1 入力機能 (Input)
* **学習内容**: テキスト入力（例：「Reactの基礎」）
* **学習時間**: 時間入力（例：「2時間」）
* **追加ボタン**: 入力した内容をリストに追加するトリガー

### 2.2 表示機能 (Display)
* 追加された学習記録を一覧（リスト形式）で表示する。
* 最新の記録が分かるように表示する（順序は任意、今回は追加順または新しい順）。

### 2.3 データ保存機能 (Persistence)
* **LocalStorage** を使用してデータをブラウザ内に保存する。
* ブラウザをリロードしたり、一度閉じて再送しても、前回の入力データが消えずに残っていること。

## 3. 技術スタック (Tech Stack)

| カテゴリ | 使用技術 | 役割・選定理由 |
| :--- | :--- | :--- |
| **Language** | TypeScript | 型安全性によるバグの抑制（Pythonの型ヒントの厳格版） |
| **Library** | React | コンポーネントベースのUI構築 |
| **Build Tool** | Vite | 高速な開発サーバー・ビルド環境 |
| **Storage** | LocalStorage | ブラウザ標準のKVS（Key-Value Store） |
| **Styling** | CSS Modules | スコープ汚染を防ぐスタイル定義 |

## 4. データ構造 (Data Structure)

学習記録ひとつあたり、以下のデータを持つことを想定する（TypeScript Interface）。

```typescript
interface LearningLog {
  id: string;      // 一意なID (削除や更新管理のため。今回はDate.now()等で簡易生成可)
  content: string; // 学習内容 (例: "React Hooksの学習")
  time: number;    // 学習時間 (例: 2)
}