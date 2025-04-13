// src/index.js
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from './i18n'; // i18nインスタンスを直接インポート

// i18nの初期化が完了するまで待機
i18n.init().then(() => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  );
}).catch(error => {
  console.error('Failed to initialize i18n:', error);
  // フォールバックとしてエラーメッセージを表示
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<div>Error loading the application. Please try again later.</div>);
});
