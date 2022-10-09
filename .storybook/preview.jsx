
import { createParametersDesign, withDesignDecorator } from '../src/design';
import { createI18nDecorator, createI18nGlobalType } from '../src/i18n';


const parameters = {
  ...createParametersDesign('https://www.figma.com/file/gD4ZOch69dEIgplqpKHzcj/Material-Dark-Theme-Design-Kit-(Community)?node-id=0%3A660', 'figma'),


  actions: {
    argTypesRegex: '^on[A-Z].*'
  },

  controls: {
    expanded: false,

    matchers: {
      color: /(background|color)$/i,

      date: /Date$/
    }
  }
};

const decorators = [
  withDesignDecorator,
];


const globalTypes = {
  ...createI18nGlobalType([
    { value: 'en', title: 'English' },
    { value: 'uk', title: 'Ukrainian' }
  ])
};

export { parameters, decorators, globalTypes };
