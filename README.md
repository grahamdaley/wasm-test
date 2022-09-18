# WASM in Web Worker using Vite 3 & Vue.js 3

The purpose of this project is to illustrate an issue I came up against when building a project that calls a wasm function from within a web worker. The app is able to run using `yarn dev` or `npm run dev`, but building it for production fails.

This is a very basic example. The wasm function simply takes a number as input (from the JS code) and returns it, whereupon it is displayed in an alert on the web page.

Feel free to let me know if this is my error, or a known bug with one of the packages I'm using.

## Prerequisites

- [Rust](https://doc.rust-lang.org/book/ch01-01-installation.html)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)
- [yarn](https://yarnpkg.com/getting-started/install) (optional - can also use npm with the same results)

## Building and running locally

Install JS dependencies:

```bash
$ yarn install
```

Build the wasm module:

```sh
$ wasm-pack build ./src/hello_wasm --target bundler
```

Start up Vite's local web server:

```sh
$ yarn dev
```

In your terminal window, you should now see:

```
  VITE v3.1.2  ready in 198 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Click on the link for the 'Local' URL, and you should see the app open like so in your web browser:

![Screenshot](screenshot.png?raw=true "Screenshot")

## Building for production

After completing the above steps and confirming that the app runs locally, use Ctrl+C to terminate the vite web server and then:

```sh
$ yarn build
```

However, this will fail with a message similar to the following:

```
yarn run v1.22.19
$ vue-tsc --noEmit && vite build
vite v3.1.2 building for production...
✓ 3 modules transformed.
✓ 17 modules transformed.
[vite:worker-import-meta-url] Could not load /Users/gdaley/wasm-test/src/hello_wasm/pkg/hello_wasm_bg.wasm (imported by src/hello_wasm/pkg/hello_wasm.js): Cannot read properties of undefined (reading 'load')
file: /Users/gdaley/wasm-test/src/components/HelloWorld.vue?vue&type=script&setup=true&lang.ts
error during build:
TypeError: Could not load /Users/gdaley/wasm-test/src/hello_wasm/pkg/hello_wasm_bg.wasm (imported by src/hello_wasm/pkg/hello_wasm.js): Cannot read properties of undefined (reading 'load')
    at Object.load (/Users/gdaley/wasm-test/node_modules/vite-plugin-wasm/dist/index.js:52:66)
    at async file:///Users/gdaley/wasm-test/node_modules/rollup/dist/es/shared/rollup.js:22113:98
    at async Queue.work (file:///Users/gdaley/wasm-test/node_modules/rollup/dist/es/shared/rollup.js:22820:32)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
