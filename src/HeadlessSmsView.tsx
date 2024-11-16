import { requireNativeView } from 'expo';
import * as React from 'react';

import { HeadlessSmsViewProps } from './HeadlessSms.types';

const NativeView: React.ComponentType<HeadlessSmsViewProps> =
  requireNativeView('HeadlessSms');

export default function HeadlessSmsView(props: HeadlessSmsViewProps) {
  return <NativeView {...props} />;
}
