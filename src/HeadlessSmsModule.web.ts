import { registerWebModule, NativeModule } from 'expo';

import { HeadlessSmsModuleEvents } from './HeadlessSms.types';

class HeadlessSmsModule extends NativeModule<HeadlessSmsModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(HeadlessSmsModule);
