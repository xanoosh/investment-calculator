import { AspectRatio } from '@radix-ui/react-aspect-ratio';

import { ReactNode } from 'react';

export default function AspectRatioWrapper({
  children,
  ratio,
}: {
  children: ReactNode;
  ratio: number;
}) {
  return <AspectRatio ratio={ratio}>{children}</AspectRatio>;
}
