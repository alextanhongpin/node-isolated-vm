import ivm from "isolated-vm";

const code = `(function() { return 'Hello, Isolate!' })()`;

const isolate = new ivm.Isolate({ memoryLimit: 8 }); // MB
const script = isolate.compileScriptSync(code);
const context = isolate.createContextSync();

// Prints "Hello, Isolate!"
console.log(script.runSync(context));
