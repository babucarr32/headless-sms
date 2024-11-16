// Reexport the native module. On web, it will be resolved to HeadlessSmsModule.web.ts
// and on native platforms to HeadlessSmsModule.ts
export { default } from './HeadlessSmsModule';
export { default as HeadlessSmsView } from './HeadlessSmsView';
export * from  './HeadlessSms.types';
