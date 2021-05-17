import React from 'react';
import '../normalize.css';
import '../index.css';

function FormularioContacto() {
  return (
    <div>
        <section>
            <form action="" className="form-contacto">
                <br/>
                <fieldset>
                    <h3 className="h3C">Información personal</h3>
                    <input type="text" name="" id="nombre" placeholder="Nombre" required/>
                    <input type="email" name="" id="email" placeholder="Correo Electrónico" required/>
                    <input type="tel" name="" id="telefono" placeholder="Teléfono" required/>
                    <textarea name="" id="mensaje" placeholder="Mensaje" required></textarea>
                </fieldset>
                <br/>
                <input type="submit" id="btnContacto" value="Enviar" className="btn-enviar"/>
            </form>
        </section>
    </div>
  );
}
export default FormularioContacto