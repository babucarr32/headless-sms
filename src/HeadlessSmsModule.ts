import { NativeModule, requireNativeModule } from 'expo';

import { HeadlessSmsModuleEvents } from './HeadlessSms.types';

declare class HeadlessSmsModule extends NativeModule<HeadlessSmsModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<HeadlessSmsModule>('HeadlessSms');
