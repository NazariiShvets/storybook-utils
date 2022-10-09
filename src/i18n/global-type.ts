import { LOCALE_KEY } from './constants';

const createI18nGlobalType = (
  languages = [
    { value: 'en', title: 'English' },
    { value: 'uk', title: 'Ukrainian' }
  ],
  config: { name: string; description: string } = {
    name: 'Locale',
    description: 'Internationalization locale'
  }
) => ({
  [LOCALE_KEY]: {
    ...config,
    toolbar: {
      icon: 'globe',
      items: languages,
      showName: false
    }
  }
});

export { createI18nGlobalType };
