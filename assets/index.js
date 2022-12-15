// fix issue: webpack > 5, import stream-browserify
// Using external file as chrome ext doesn't allow inline script
var global = global || window;
var Buffer = Buffer || [];
var process = process || {
  env: { DEBUG: true },
  version: [],
};
