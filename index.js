const operaciones = require("./operaciones");

const arguments = process.argv.slice(2);
const [operacion, ...args] = arguments;

if (operacion === "create") {
  operaciones.create(args);
} else if (operacion === "read") {
  operaciones.read();
} else {
  console.log("Operación no reconocida.");
}
