import * as React from 'react';

import { HeadlessSmsViewProps } from './HeadlessSms.types';

export default function HeadlessSmsView(props: HeadlessSmsViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
