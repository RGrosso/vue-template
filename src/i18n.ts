import { createI18n } from "vue-i18n";

const messages = Object.fromEntries(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Object.entries(import.meta.glob<{ default: any }>(`../locales/*.json`, { eager: true })).map(([key, value]) => [
    key.slice(11, -5),
    value.default,
  ])
);

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});
