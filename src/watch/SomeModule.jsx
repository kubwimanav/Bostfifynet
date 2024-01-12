
const SomeModule = () => import("./some-module");

export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'axios'], 
        },
      },
    },
  },
};

