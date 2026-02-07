import { useState } from "react"
import { HijoVehiculo } from "./HijoVehiculo"

export const PadreVehiculo = () => {
    const [vehiculoSeleccionado,setVehiculoSeleccionado] = useState('')

    const mostrarVehiculo = (vehiculo:string) => {
        setVehiculoSeleccionado(vehiculo)
        console.log(vehiculo)
        //console.log(vehiculoSeleccionado) se muestra bien en el siguiente render
    }

  return (
    <>
        <HijoVehiculo onVehiculoClick={(vehiculo)=> mostrarVehiculo(vehiculo.toUpperCase())}/>
    </>
  )
}
