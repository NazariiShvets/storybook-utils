import type { FC, HTMLAttributes, PropsWithChildren } from 'react';

import { Card } from '../ui';

const ColorsRoot: FC<PropsWithChildren<{ columns?: number }>> = ({
  columns = 3,
  children
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: 8,
      padding: 12
    }}
  >
    {children}
  </div>
);

const ColorsItem: FC<
  { name: string; value: string } & HTMLAttributes<HTMLDivElement>
> = ({ name, value, ...props }) => (
  <Card
    {...props}
    style={{
      display: 'grid',
      alignItems: 'center',
      gap: 8,
      padding: 12,
      ...(props.style ?? {})
    }}
  >
    <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{name}</div>

    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        gap: 4
      }}
    >
      <Card
        style={{
          width: 50,
          height: 50,
          background: value,
          borderRadius: 4
        }}
      />
      <div>{value}</div>
    </div>
  </Card>
);

const resolveStitchesRelativeColorValue = (
  colorMap: Record<string, string>
): Record<string, string> => {
  const map: Record<string, string> = {};

  Object.entries(colorMap).forEach(([key, value]) => {
    map[key] = value.startsWith('$')
      ? Object.entries(colorMap).find(([key]) => key === value.substring(1))[1]
      : value;
  });

  return map;
};

const Colors = {
  Root: ColorsRoot,
  Item: ColorsItem
};

export { ColorsItem, ColorsRoot, Colors, resolveStitchesRelativeColorValue };
