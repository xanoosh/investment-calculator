import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { AspectRatioWrapperInterface } from '../interfaces';

export default function AspectRatioWrapper({
  children,
  ratio,
}: AspectRatioWrapperInterface) {
  return <AspectRatio ratio={ratio}>{children}</AspectRatio>;
}
