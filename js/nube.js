export class guardado {

    constructor(lista){
        this.lista = JSON.parse(localStorage.getItem('guardado', lista)) || [];  
    }

    findAllReservas(){
return this.lista
    }

    createReserva(reserva){
this.lista.push(reserva)
localStorage.setItem('guardado', JSON.stringify(this.lista))
    }

    findOneByReserva(reservaId){
        const reserva= this.lista.find(numero => numero.telefono === reservaId)
        console.log(reserva)
        
        if (!reserva){
        throw new Error('No se encontro el numero de registro: ' + reservaId)
        }

return reserva;
       
        
        
    }

    deleteReserva(reservaId){
        const reserva= this.findByNumberOrder(reservaId)
    const index= this.lista.indexOf(reserva)
    this.lista.splice(index, 1)
    localStorage.setItem( 'guardado', JSON.stringify(this.lista) )
}
    }
