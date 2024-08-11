function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length === 0){
    return 0;
  }
  let sumatotal = resultadosTest.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
  
  let promedio = sumatotal / resultadosTest.length;

  return promedio;
}

module.exports = promedioResultadosTest;
