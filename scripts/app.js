//Ejercicio 1

function arrayNombre() {
  let nombre = ['Y', 'E', 'L', 'D', 'E', 'R']

  for (let i = 0; i < nombre.length; i++) {
    console.log(nombre[i])
  }
}

//Ejercicio 2

function arrayNomVocalesConsonantes() {
  let nombre = ['Y', 'E', 'L', 3, 'D', 'E', 'R']

  console.log('Partim del nom YEL' + 3 + 'DER')
  for (let i = 0; i < nombre.length; i++) {
    //Si existe una vocal...
    if (
      nombre[i] == 'A' ||
      nombre[i] == 'E' ||
      nombre[i] == 'I' ||
      nombre[i] == 'O' ||
      nombre[i] == 'U'
    ) {
      console.log('He trobat la VOCAL: ' + nombre[i])
    } else if (
      //Si existe un numero...
      nombre[i] == 1 ||
      nombre[i] == 2 ||
      nombre[i] == 3 ||
      nombre[i] == 4 ||
      nombre[i] == 5 ||
      nombre[i] == 6 ||
      nombre[i] == 7 ||
      nombre[i] == 8 ||
      nombre[i] == 9 ||
      nombre[i] == 0
    ) {
      //Si no , es consonante
      console.log('Els noms de persones no contenen el numero: ' + nombre[i])
    } else {
      console.log('He trobat la CONSONANT: ' + nombre[i])
    }
  }
}

//Ejercicio 3

function arrayMap() {
  let nombre = 'YELDER'
  const objeto = {}

  //Se una split para dividr el nombre en letras
  let nomSeparado = nombre.split('')

  //Se realiza una función anonima para saber cantidad de cada letra en el nombre
  let cantidadLetras = nomSeparado.map(function (letra) {
    if (objeto.hasOwnProperty(letra)) {
      objeto[letra] += 1
    } else {
      objeto[letra] = 1
    }
  })

  console.log({ objeto })
}

//Ejercicio4
function contatenar() {
  let nombre = ['Y', 'E', 'L', 'D', 'E', 'R']
  let espacio = [' ']
  let apellido = ['D', 'A', '', 'S', 'I', 'L', 'V', 'A']

  //Se concatena
  let nombreCompleto = nombre.concat(espacio, apellido)

  console.log(nombreCompleto)
}

//Ejercicio 5 nivel 2

function buscarEmails() {
  let str =
    'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos.' +
    'Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico.' +
    'Cada dirección de correo electrónico sólo se puede asignar una vez ' +
    'en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las ' +
    'direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de ' +
    'correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio ' +
    'detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el ' +
    'cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información' +
    'varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o ' +
    'gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado ' +
    'su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo ' +
    'electrónico que configura para el dominio lo tienen como parte del dominio ' +
    '(nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). ' +
    'El nombre de usuario es la parte de una dirección de correo electrónico quepuede seleccionar ' +
    'libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre ' +
    'o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de ' +
    'correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ' +
    'ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su ' +
    'dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican ' +
    'porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio ' +
    'dominio. En resumen, nombre-de-usuario@ionos.es es un email'

  //Se usa el metodo match para encontrar coincidencias
  let emails = str.match(
    /([a-zA-ZÀ-ÿ0-9._-]+@[a-zA-ZÀ-ÿ0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  )
  //Se ponen las todas letras en minuscula para reducir la probailidad de erroes
  emails = emails.map(function (x) {
    return x.toLowerCase()
  })
  //Se usa el metodo filter para ubicar los emails y que no se repitan
  let emailsUnicos = emails.filter((a, b) => emails.indexOf(a) === b)

  console.log(emailsUnicos)
}
