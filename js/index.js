import {reserva} from '../js/reservas.js'
import {guardado} from '../js/nube.js'

const nube = new guardado([])

const botonEnviar= document.getElementById('formulario--boton1')
const inputNombre = document.getElementById('inputNombre')
const inputMail = document.getElementById('inputMail')
const inputTelefono = document.getElementById('inputTelefono')
const selectTipoHabitacion  = document.getElementById('tipoDeHab')
const selectCantAdultos= document.getElementById('cantAdultos')
const selectCantNiños= document.getElementById('cantNiños')

botonEnviar.addEventListener ('click', () => {

const nombre = inputNombre.value
const mail= inputMail.value 
const telefono = +inputTelefono.value
const tipoDeHab = selectTipoHabitacion.value 
const cantAdultos= selectCantAdultos.value
const cantNiños = selectCantNiños.value  

const reservaNueva = new reserva(nombre, mail, telefono, tipoDeHab, cantAdultos, cantNiños)

nube.createReserva(reservaNueva)
}
)

console.log(nube.findAllReservas())
