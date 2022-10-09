import type { Meta, Story } from '@storybook/react';

import type { ButtonProps } from './button';

import { Button } from './button';

const story: Meta = {
  title: 'Button',
  component: Button
};

export const Playground: Story<ButtonProps> = args => <Button {...args} />;

Playground.args = {
  children: 'Hello world!123'
};

export default story;
