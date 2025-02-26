---
layout: default
title: Loading Binary
nav_order: 2
parent: WASM Overview
has_children: false
---

Since it was built on Go, the binary requires that you preload the `wasm_exec.js` library file that comes with your Go instance. You can find out more on how to locate it [here](https://github.com/golang/go/wiki/WebAssembly#getting-started).

## The Go-WASM namespace

Our build's target OS is Javascript, so each of our functions must be bound to a variable in the JS runtime environment. Following the naming convention from this repo, they live under `global.__gobridge__` like so:

```
func1 -> global.__gobridge__.func1
```

to avoide polluting the `global` object.

## Loading a web page

Provided you have `wasm_exec.js` and `privacy.wasm` served, you can load it using this HTML snippet:

```html
<script src="wasm_exec.js"></script>
<script>
    const go = new Go();
    WebAssembly.instantiateStreaming(fetch("privacy.wasm"), go.importObject).then((result) => {
        go.run(result.instance);
    });
</script>
```

or this Javascript snippet:

```javascript
require("./wasm_exec")
const go = new Go();
let inst;

if (!WebAssembly.instantiateStreaming) {
    WebAssembly.instantiateStreaming = async (resp, importObject) => {
        const source = await (await resp).arrayBuffer();
        return await WebAssembly.instantiate(source, importObject);
    };
}
let result = await WebAssembly.instantiateStreaming(fetch(fileName), go.importObject);
inst = result.instance;
go.run(inst);
```

Look for the log message `WASM loading finished` to verify that it was loaded, or you can use the console 

### Insert Image
