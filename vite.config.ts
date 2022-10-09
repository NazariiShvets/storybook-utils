/* eslint-disable */
import react from '@vitejs/plugin-react';
import { defineConfig, mergeConfig } from 'vite';

import config from './vite.base.config';

export default defineConfig(
  mergeConfig(config, {
    plugins: [
      react()
    
  })
);
