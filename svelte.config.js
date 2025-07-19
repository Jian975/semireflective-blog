import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import { resolve } from "path";

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  vite: {
    resolve: {
      alias: {
        $data: resolve("./src/data"),
      },
    },
  },
  kit: {
    adapter: adapter(),
    alias: {
      $lib: "src/lib",
      $data: "src/data",
    },
    paths: {
      base: "/semi-reflective-blog",
    },
  },
};

export default config;
