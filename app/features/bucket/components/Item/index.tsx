import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { FC } from 'react';

type Props = {
  text: string;
}

export const Item: FC<Props> = ({text}) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ width: '100%' }}>
      <Text size="sm" c="dimmed">
        {text}
      </Text>
    </Card>
  );
}