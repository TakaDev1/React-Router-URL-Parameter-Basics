# React Router URL Parameter Basics

React Routerの`useParams`を使用して、URLパラメータから`id`を取得する基本的な練習アプリです。

## 目次

* [概要](#概要)
* [学習内容](#学習内容)
* [課題](#課題)
* [使用技術](#使用技術)
* [プロジェクト構成](#プロジェクト構成)
* [実装内容](#実装内容)
* [動作確認](#動作確認)
* [学習ポイント](#学習ポイント)

## 概要

`/user/:id`という動的なURLを作成し、URLに含まれる`id`を`useParams`で取得して画面に表示します。

例えば、以下のURLにアクセスします。

```text
/user/123
```

画面には以下のように表示されます。

```text
User ID: 123
```

## 学習内容

このアプリでは、以下の内容を学習します。

* React Routerの動的ルーティング
* URLパラメータ
* `useParams`
* `Route`の`path`に`:id`を指定する方法
* URLパラメータから値を取得する方法

## 課題

### 問題

`useParams`を使って、URLに含まれる`id`を取得して表示してください。

### 条件

* `/user/:id`のRouteを作成する
* `User`コンポーネントを作成する
* `useParams`を使用する
* URLの`id`を取得する
* `User ID: ○○`と表示する

### 例

```text
/user/123
```

↓

```text
User ID: 123
```

## 使用技術

* React
* TypeScript
* React Router
* Vite

## プロジェクト構成

```text
src/
├── pages/
│   └── User.tsx
├── App.tsx
└── main.tsx
```

### `App.tsx`

`/user/:id`のRouteを定義します。

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### `User.tsx`

`useParams`を使用してURLの`id`を取得します。

```tsx
import { useParams } from "react-router";

function User() {
  const { id } = useParams<"id">();

  return <h1>User ID: {id}</h1>;
}

export default User;
```

## 実装内容

### 1. 動的なRouteを作成する

```tsx
<Route path="/user/:id" element={<User />} />
```

`:id`の部分がURLパラメータになります。

例えば、

```text
/user/123
/user/456
/user/789
```

のように異なる値を受け取ることができます。

### 2. `useParams`でURLパラメータを取得する

```tsx
const { id } = useParams<"id">();
```

`/user/123`にアクセスした場合、

```text
id = "123"
```

として取得できます。

### 3. 取得した`id`を表示する

```tsx
<h1>User ID: {id}</h1>
```

その結果、

```text
User ID: 123
```

と表示されます。

## 動作確認

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで以下のURLにアクセスします。

```text
http://localhost:5173/user/123
```

以下の表示になれば成功です。

```text
User ID: 123
```

別のIDでも確認できます。

```text
http://localhost:5173/user/456
```

↓

```text
User ID: 456
```

## 学習ポイント

この課題では、React Routerの**URLパラメータを利用した動的ルーティング**の基本を学習します。

特に重要なのは以下の関係です。

```text
/user/:id
   ↓
Routeで:idを定義
   ↓
useParams()
   ↓
idを取得
   ↓
画面に表示
```

`useParams`を使うことで、URLによって変化する値をコンポーネント内で取得できます。

これは、ユーザー詳細ページなどの実装で利用されます。

例：

```text
/user/1
/user/2
/user/3
```

それぞれ異なるユーザーIDとして扱うことができます。
