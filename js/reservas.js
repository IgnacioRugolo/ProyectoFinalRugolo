export class reserva{

    constructor(nombre, mail, telefono, habitacion, cantAdultos, cantNiños){

        this.nombre= nombre
        this.mail=mail
        this.telefono=telefono 
        this.habitacion=habitacion
        this.cantAdultos=cantAdultos
        this.cantNiños= cantNiños

}

getNombre(){
return this.nombre
}

getMail(){
    return this.mail
}

getTelefono(){
    return this.telefono
}
getHabitacion(){
    return this.habitacion
}

getAdultos(){
    return this.cantAdultos
}

getNiños(){
    return this.cantNiños
}

}