import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import {chromeManifest, firefoxManifest} from "./src/manifest.ts";
import path from "path";
import fs from "fs";
import { nextTick } from "process";
// import mainfestFirefox from './manifest-firefox.json'
export default ({ mode }) => {  
  return defineConfig({
    plugins: [
      vue(),
      {
        name: 'ts-to-json',
        enforce: 'pre',
        async config() {
          
        },
        async buildStart() {
          await fs.writeFileSync(
            path.resolve(__dirname, 'manifest.json'),
            JSON.stringify(!['chrome', 'firefox'].includes(mode) ? chromeManifest : mode === 'firefox' ? firefoxManifest : chromeManifest, null, 2)
          )
        },
        async buildEnd() {
          // 当前文件目录下的 manifest.json
          nextTick(() => {
            fs.rename('manifest.json', 'dist/manifest.json', function (err) {
              console.error('err', err);
            })
          })
        },
      },
    ],
    build: {
      rollupOptions: {
        input: {
          background: "src/background/index.ts",
          content: "src/content/index.ts",
          // popup: "popup.html",
        },
        output: {
          entryFileNames: "[name].js"
        },
      },
    },
  });
};
