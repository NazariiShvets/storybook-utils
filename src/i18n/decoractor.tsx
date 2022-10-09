import type { DecoratorFunction } from '@storybook/csf';

import type { i18n as I18N } from 'i18next';

import type { FC, ReactNode } from 'react';

import { Suspense, useEffect } from 'react';

import { I18nextProvider } from 'react-i18next';

import { LOCALE_KEY } from './constants';

const createI18nDecorator =
  (i18n: I18N, fallback: ReactNode = <div>loading translations...</div>) =>
  (Story: FC, context: Parameters<DecoratorFunction>[1]) => {
    // eslint-disable-next-line react/destructuring-assignment
    const locale = context.globals[LOCALE_KEY] as string;

    // When the locale global changes
    // Set the new locale in i18n
    useEffect(() => {
      i18n.changeLanguage(locale);
    }, [locale]);

    return (
      <Suspense fallback={fallback}>
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </Suspense>
    );
  };

export { createI18nDecorator };
