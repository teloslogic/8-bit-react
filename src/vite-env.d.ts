/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

interface ImportMetaEnv {
  readonly VITE_BIT_PORT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Example access the ENV varaiable from the PWA:
// const appPort = import.meta.env.VITE_BIT_PORT
