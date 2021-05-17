import React from 'react';
import '../normalize.css';
import '../index.css';

function FormPropiedades() {
  return (
    <div>
        <form className="formulario-buscar">
            <select name="TipoPropiedad" className="camposForm">
                <option value="TipoOperacion" selected disabled>Tipo de Operación</option>
                <option value="Venta">Comprar</option>
                <option value="Alquiler">Alquilar</option>
            </select>

            <select name="TipoPropiedad" className="camposForm">
                <option value="TipoPropiedad" selected disabled>Tipo de Propiedad</option>
                <option value="Casa">Casa</option>
                <option value="Departamento">Departamento</option>
                <option value="Local">Local</option>
                <option value="Terreno">Terreno</option>
                <option value="Oficina">Oficina</option>
                <option value="Quinta">Quinta</option>
            </select>
            
            <input type="zona" placeholder="Zona, ciudad, provincia" className="camposForm buscar-zona"/> 
            <button className="btn-buscarForm">Buscar</button>
        </form> 
    </div>
  );
}
export default FormPropiedades;