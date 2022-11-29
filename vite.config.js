import { defineConfig } from "vite";
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: { host: "0.0.0.0", port: 3000 },
  preview: { host: "0.0.0.0", port: 3000 },
  define: {
    "import.meta.env.VERCEL_ANALYTICS_ID": JSON.stringify(
      process.env.VERCEL_ANALYTICS_ID
    )
  }
});