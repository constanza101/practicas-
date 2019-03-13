import { mesas, pizarra } from './materiales.js'


function calculaPresupuesto(){
  console.log("materiales necesarios:"+JSON.stringify(mesas)+", "+pizarra);
  console.log("presupuesto: 300k");
}

export { calculaPresupuesto }
