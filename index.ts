// crear las clases Edificio, Piso y Departamento aquí

class Departamento {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getName() {
    // retoena el nombre del Departamento
    return this.nombre;
  }
}

class Piso {
  nombre: string;
  deptos: Departamento[] = []; // aqui asiganmos un array vacio [] parea poder aplicarle el metodo push a deptos o sino no me deja
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  pushDepartamento(dpto: Departamento) {
    // este metodo asigana un nuevo valor a deptos agrega un departamento
    return this.deptos.push(dpto);
  }
  getDepartamentos(): Departamento[] {
    return this.deptos;
  }
}

class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    // recibimo el nombre y buscamos dentro de mis piso  con find el piso que tenga el nombre deDepISO QUE LE PASAMOS
    // Esto retorna un valor (pisoencontrado) que le aplicamos el metodo pushDepartamento.
    // con el metodo pushDepartamento agregamos un departamento nuevo al array de departamento de esta forma convinamos las clases
    const pisoEncontrado = this.pisos.find((p) => p.nombre == nombreDePiso);
    pisoEncontrado.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDelPiso: string): Departamento[] {
    // aqui en el piso devolvera todos los departamento del piso en el metodo
    //getDepartamento que viene a ser una funcion o metodo de la class Piso y asi se relacionan las clases
    const pisoEncontrado = this.pisos.find((p) => p.nombre == nombreDelPiso);
    return pisoEncontrado.getDepartamentos();
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
  console.log("vino otra persona y le hizo un cambio");
}
main();
