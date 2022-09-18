import * as wasm from '../hello_wasm/pkg/hello_wasm';

onmessage = (msg: MessageEvent<number>) => {
  const result = wasm.get_number(msg.data);
  postMessage({ result: result });
};
