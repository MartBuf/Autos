
let autos = require('./autos');

const concesionaria = {
     autos: autos,

     
     buscarAuto: function (patente) {
          for (let i = 0; i <= autos.length; i++) {
               if (autos[i].patente == patente) {
                    return autos[i]
               } else
                    return null;
          }
     },
     
     venderAuto: function (patente) {
          const auto = this.buscarAuto(patente);
        
          if (auto) {
               auto.vendido = true;
          } return auto;
     },

   
     autosParaLaVenta: function () {
          return this.autos.filter((function (auto) { return auto.vendido === false }))
     },
     
     autosNuevos: function () {
          return this.autosParaLaVenta().filter(function (patente) {
               return (patente.vendido == false && patente.km < 100) });
     },

    
     listaDeVentas: function () {
          let ventas = this.autos.filter(function (patente) {
               return patente.vendido == true
          });
     
          let total = [];
          ventas.forEach(function (costo) {
               total.push(costo.precio);
          })
          return total;
     },

   
totalDeVentas: function () {
     const todo = this.listaDeVentas().reduce((acumula, item) => { return acumula + item; }, 0);
     return todo;
     },

     puedeComprar: function (autosParaLaVenta,persona) {
          let precioPorCuota = this.autosParaLaVenta.precio / 12
          if ((this.autosParaLaVenta.precio > persona.capacidadDePagoTotal) ||
               (precioPorCuota > persona.capacidadDePagoEnCuotas)) {
               return false;
               } 
          else {
               return true;
          }
     },
}

console.log('*************** INICIO **************');
console.log('   ');
console.log('******** AUTOS EN CONCESIONARIA *****');
console.log(concesionaria.autos);
console.log('******** BUSCAR AUTO ************');
console.log(concesionaria.buscarAuto('APL123'));
console.log('******** VENDER AUTO ************');
console.log(concesionaria.venderAuto('APL123'));
console.log('******** AUTOS PARA LA VENTA ************');
console.log(concesionaria.autosParaLaVenta());
console.log('******** AUTOS NUEVOS < 100 km ************');
console.log(concesionaria.autosNuevos());
console.log('******** LISTA DE VENTAS ************');
console.log(concesionaria.listaDeVentas());
console.log('******** TOTAL DE VENTAS ************');
console.log(concesionaria.totalDeVentas());
console.log('******** PUEDE COMPRAR  ************');
console.log(concesionaria.puedeComprar('Ford', 'Juan'));
console.log('************** FIN  ************');