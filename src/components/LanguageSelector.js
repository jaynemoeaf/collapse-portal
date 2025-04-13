// src/components/LanguageSelector.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import '../App.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nLang', lng); // 言語選択を保存
  };

  return (
    <div className="language-selector">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language || 'ja'}
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="la">Latina</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
