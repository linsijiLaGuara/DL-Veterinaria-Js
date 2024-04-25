const { readFileSync, writeFileSync } = require("fs");

const create = (args) => {
  const [nombre, edad, animal, color, enfermedad] = args;

  // Leer el contenido actual del archivo
  let operaciones = read();

  const nuevaCita = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };

  operaciones.push(nuevaCita);

  // Escribir el contenido actualizado de vuelta al archivo
  writeFileSync("citas.json", JSON.stringify(operaciones));
  console.log("\n");
  console.log("Datos agregados correctamente.");
  console.log(nuevaCita);
  console.log("********************************");
  console.log("\n");
};

const read = () => {
  const operaciones = JSON.parse(readFileSync("citas.json", "utf8"));
  console.log("\n");
  console.log("*****Los datos son ********:");
  console.log(operaciones);
  console.log("********************************");
  console.log("\n");

  return operaciones;
};

module.exports = { create, read };
