
interface Props {
    onVehiculoClick : (vehiculo:string) => void
}

export const HijoVehiculo = ({ onVehiculoClick }:Props) => {
  return (
    <>
        <button onClick={()=>onVehiculoClick('coche')}>coche</button>
        <button onClick={()=>onVehiculoClick('moto')}>moto</button>
        <button onClick={()=>onVehiculoClick('bicicleta')}>bicicleta</button>
    </>
  )
}
