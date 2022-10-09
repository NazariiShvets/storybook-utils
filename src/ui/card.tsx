import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

const Card: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  style = {},
  ...props
}) => (
  <div
    style={{
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
      borderRadius: 2,
      ...style
    }}
    {...props}
  />
);

export { Card };
