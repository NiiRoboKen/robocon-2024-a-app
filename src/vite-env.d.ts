/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_URL: string;
  readonly VITE_INTERVAL_TIME: number;
  readonly VITE_MAX_POWER: number;
  readonly VITE_POWER_RATIO: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
