import ivm from "isolated-vm";
const code = `++count`;

const isolate = new ivm.Isolate({ memoryLimit: 8 });
const script = isolate.compileScriptSync(code);
const context = isolate.createContextSync();

// A context is an object that contains
// the global variables available to the
// script when it runs in isolate.
// You can share global values between runs by re-using the same context as shown below.
context.evalSync("let count = 0;");

console.log(script.runSync(context)); // Prints "1"
console.log(script.runSync(context)); // Prints "2"
