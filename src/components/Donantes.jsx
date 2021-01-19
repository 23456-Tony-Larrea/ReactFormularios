import React from "react";
const Donantes=()=>{
return(
    <div>
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
        <body>        
        <center><h1>Nur Donantes</h1></center>
     <label>Nombres y Apellidos</label>
     <br/>
     <input type="text" class="input border border-gray-400 "/>
     <br/>
     <label>Cedula</label>
     <br/>
     <input type="text" class="input border border-gray-400 "/>
     <br/>
     <label>Correo</label>
     <br/>
     <input type="text" class="input border border-gray-400 "/>
     <br/>
     <label>Telefono Celular</label>
     <br/>
     <input type="text" class="input border border-gray-400 "/>
     <br/>
     <label>Telefono fijo</label>
     <br/>
     <input type="text" class="input border border-gray-400 "/>
     <br/>
     <label>Direccion</label>
     <br/>
     <input type="text" class="input border border-gray-400 "/>
    <br/>
    <br/>
    <label>Adjuntar evidencia</label>
    <br/>
    <br/>
    <input type="file" class="bg-blue text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded"/>
    <br/>

    <center>
            <button class="mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">Atras</button>
            <button class="mr-5 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg">Siguiennte</button>
        </center>        
    </body>        
    
    </div>
    
)
}
export default Donantes