import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { resolve, dirname } from "node:path";
import vue from "@vitejs/plugin-vue";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

export default defineConfig(({ mode }) => {
  const inProduction = mode === "production";

  return {
    plugins: [
      vue(),

      // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: resolve(dirname(fileURLToPath(import.meta.url)), "./path/to/src/locales/**"),
      }),
    ],
    resolve: {
      alias: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
        },
      },
      sourcemap: !inProduction,
      target: "esnext",
      minify: inProduction ? "esbuild" : false,
    },
    server: {
      port: 3333,
    },
  };
});
