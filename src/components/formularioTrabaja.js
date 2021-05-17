import React from 'react';
import '../normalize.css';
import '../index.css';

function FormularioTrabaja() {
  return (
    <div>
        <section>
            <form action="" className="form-contacto">
                <br/>
                <fieldset>
                    <h3 className="h3C">Datos personales</h3>
                    <input type="text" name="" id="nombrecurriculum" placeholder="Nombre completo" required/>
                    <input type="email" name="" id="emailcurriculum" placeholder="Correo Electrónico" required/>
                    <input type="tel" name="" id="telefonocurriculum" placeholder="Teléfono" required/>
                    <textarea name="" id="mensajecurriculum" placeholder="Contanos sobre vos" required></textarea> 
                </fieldset>
                <br/>
                <input type="submit" value="Enviar" className="btn-enviar"/>
            </form>
        </section>
    </div>
  );
}
export default FormularioTrabaja;