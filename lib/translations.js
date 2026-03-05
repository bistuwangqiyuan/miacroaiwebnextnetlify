import zh from '../locales/zh.json';
import en from '../locales/en.json';

const messages = { zh, en };

export function getTranslations(locale) {
  return messages[locale] || messages.zh;
}
