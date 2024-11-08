import adapter from '@sveltejs/adapter-static'; // Import the adapter
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null, // Adjust this if needed
      precompress: false,
      strict: true
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/project2' : ''
    },
    prerender: {
      handleMissingId: 'ignore', // Ignore errors for missing IDs (you can also use 'warn' or 'error')
      handleHttpError: ({ status, path, referrer, referenceType }) => {
        if (status === 404) {
          // Ignore 404 errors on specific routes
          return;
        }
        // Throw an error for other statuses
        throw new Error(`Status: ${status}, Path: ${path}`);
      }
    }
  }
};

export default config;