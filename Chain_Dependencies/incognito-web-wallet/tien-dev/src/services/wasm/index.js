import './wasm_exec';

let isWASMRunned = false;

function loadWASM() {
  return new Promise(async (resolve) => {
    if (isWASMRunned) {
      console.info('WASM was loaded');
      return resolve();
    }

    // eslint-disable-next-line no-undef
    const go = new Go();
    let inst;
    WebAssembly.instantiateStreaming(fetch(process.env.PUBLIC_URL + '/privacy.wasm'), go.importObject).then((result) => {
      inst = result.instance;
      go.run(inst);
      isWASMRunned = true;
      resolve();
    });
  });
}

export default loadWASM;
