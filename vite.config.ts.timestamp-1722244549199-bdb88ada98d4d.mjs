// vite.config.ts
import {
  defineConfig,
  loadEnv,
} from 'file:///home/ricka/Ricka/project/harena/harena-web/node_modules/vite/dist/node/index.js';
import react from 'file:///home/ricka/Ricka/project/harena/harena-web/node_modules/@vitejs/plugin-react/dist/index.mjs';
import istanbul from 'file:///home/ricka/Ricka/project/harena/harena-web/node_modules/vite-plugin-istanbul/dist/index.mjs';
import path from 'path';
var __vite_injected_original_dirname =
  '/home/ricka/Ricka/project/harena/harena-web';
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env': env,
    },
    plugins: [
      istanbul({
        extension: ['.js', '.ts', '.jsx', '.tsx'],
        requireEnv: false,
        nycrcPath: './.nycrc.json',
        cypress: true,
      }),
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__vite_injected_original_dirname, './src'),
      },
    },
  };
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9yaWNrYS9SaWNrYS9wcm9qZWN0L2hhcmVuYS9oYXJlbmEtd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9yaWNrYS9SaWNrYS9wcm9qZWN0L2hhcmVuYS9oYXJlbmEtd2ViL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3JpY2thL1JpY2thL3Byb2plY3QvaGFyZW5hL2hhcmVuYS13ZWIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgaXN0YW5idWwgZnJvbSAndml0ZS1wbHVnaW4taXN0YW5idWwnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xuXG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICAncHJvY2Vzcy5lbnYnOiBlbnYsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbXG4gICAgICBpc3RhbmJ1bCh7XG4gICAgICAgIGV4dGVuc2lvbjogWycuanMnLCAnLnRzJywgJy5qc3gnLCAnLnRzeCddLFxuICAgICAgICByZXF1aXJlRW52OiBmYWxzZSxcbiAgICAgICAgbnljcmNQYXRoOiAnLi8ubnljcmMuanNvbicsXG4gICAgICAgIGN5cHJlc3M6IHRydWUsXG4gICAgICB9KSxcbiAgICAgIHJlYWN0KCksXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYycpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1ULFNBQVMsY0FBYyxlQUFlO0FBQ3pWLE9BQU8sV0FBVztBQUNsQixPQUFPLGNBQWM7QUFDckIsT0FBTyxVQUFVO0FBSGpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUUzQyxTQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDTixlQUFlO0FBQUEsSUFDakI7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFdBQVcsQ0FBQyxPQUFPLE9BQU8sUUFBUSxNQUFNO0FBQUEsUUFDeEMsWUFBWTtBQUFBLFFBQ1osV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLE1BQ1gsQ0FBQztBQUFBLE1BQ0QsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
