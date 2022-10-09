const createParametersDesign = (url: string, type: 'figma' = 'figma') => ({
  design: { url, type }
});

export { createParametersDesign };

export { withDesign as withDesignDecorator } from 'storybook-addon-designs';
