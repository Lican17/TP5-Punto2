
class Persona {
    #nombre;
    #edad;
    #dni;
    #sexo;
    #peso;
    #altura;
    #anioNacimiento;

    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#dni = dni;
        this.#sexo = sexo;
        this.#peso = peso;
        this.#altura = altura;
        this.#anioNacimiento = anioNacimiento;

    }

    mostrarGeneracion() {
        
        let mensaje;
        if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
            mensaje = "Pertenece a la Generación 'Z' y su rasgo caracteristico es la Irreverencia";
        } else if (this.#anioNacimiento >= 1981 && anio.anioNacimiento <= 1993) {
            mensaje = "Pertenece a la Generación 'Y' y su rasgo caracteristico es la Frustración";
        } else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento<= 1980) {
            mensaje = "Pertenece a la Generación 'X' y su rasgo caracteristico es la Obseción por el exito";
        }
        else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
           mensaje = "Pertenece a la Generación 'Baby Boom' y su rasgo caracteristico es la ambición";
        }

        alert(mensaje);
    }

    mostrarEsMayorDeEdad() {
        
        let mayorEdad;
        if (this.#edad >= 18) {
             mayorEdad = "Si es mayor de edad";
        } else if (this.#edad < 18) {
             mayorEdad = "No es mayor de edad";
        }

        alert(mayorEdad);

    }

    mostrarDatos() { 
       const info= " El nombre es" + this.#nombre + " , su edad es " + this.#edad + ", su sexo es " +
                        this.#sexo + ", su peso es " + this.#peso + ", su altura es " + this.#altura +
                        ", su año de nacimiento es " + this.#anioNacimiento;
       
        alert(info);
    }

}

function getText(e) {
    e.preventDefault();
    
    const nombre = document.querySelector('#nombre').value;
    const edad = document.querySelector('#edad').value;
    const dni = document.querySelector('#dni').value;
    const sexo = document.querySelector('#sexo').value;
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const anioNacimiento = document.querySelector('#anioNacimiento').value;
    
     persona = new Persona(nombre,edad,dni,sexo,peso,altura,anioNacimiento);
     console.log(persona);
    
}
let persona;

const btnConsultaGeneracion = document.querySelector('#btn-consultaGeneracion');
const btnConsultaMayorDeEdad = document.querySelector('#btn-consultaMayorDeEdad');
const btnConsultaDatos = document.querySelector('#btn-consultaDatos');


btnConsultaGeneracion.addEventListener('click', () => persona.mostrarGeneracion());
btnConsultaMayorDeEdad.addEventListener('click', () => persona.mostrarEsMayorDeEdad());
btnConsultaDatos.addEventListener('click', () => persona.mostrarDatos());

const formulario = document.querySelector('form');
formulario.addEventListener('submit', getText);
