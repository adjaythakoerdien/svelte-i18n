import { dictionary, locale, _ } from "svelte-i18n";

function setupI18n({ withLocale: _locale } = { withLocale: "en" }) {
  dictionary.set({
    en: {
      header: {
        title: "Hello!",
        subtitle: "How are you doing?",
      },
    },
    nl: {
      header: {
        title: "Hoi!",
        subtitle: "Hoe gaat het met jou?",
      },
    },
    do: {
      header: {
        title: "M’ach!",
        subtitle: "Kirekosi are yeri?",
      },
    },
  });

  locale.set(_locale);
}

export { _, setupI18n };
