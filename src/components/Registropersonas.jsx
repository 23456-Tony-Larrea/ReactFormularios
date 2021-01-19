import React from "react";
const Regitroequipo=()=>{
return(
    <div>
          <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        <center><h1>Registro de Equipos</h1></center>
            
        <label>¿Conoce la pc?</label>
        <br/>
        <input type="checkbox" /><label>SI</label>
        <input type="checkbox" /><label>NO</label>
        <br/>
        <label>¿Conoce las caracteristicas del pc?</label>
        <br/>
        <label>Marca</label>
        <br/> 
        <input type="text" class="input border border-gray-400 "/>
        <br/>
        <label>Modelo</label>
        <br/>
        <input type="text" class="input border border-gray-400 "/>
        <br/>
        <label>IMEI</label>
        <br/>
        <input type="text" class="input border border-gray-400 "/>
        <br/>      
        <label>Procesador</label>
        <br/>
        <input type="text" class="input border border-gray-400 "/>
        <br/>      
        <label>Memoria</label>
        <br/>
        <input type="text" class="input border border-gray-400 "/>
        <br/>      
         <label>Disco duro</label>
         <br/>
         <input type="text" class="input border border-gray-400 "/>
        <br/>
        <label>Pantalla</label>
        <br/>
         <input type="text" class="input border border-gray-400 "/>
        <br/>
        <label>Tarjeta de video</label>
        <br/>
         <input type="text" class="input border border-gray-400 "/>
        <br/>
        <center>
            <button class="mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">Atras</button>
            <button class="mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">Siguiennte</button>
        </center>

    </div>
)
}
export default Regitroequipo