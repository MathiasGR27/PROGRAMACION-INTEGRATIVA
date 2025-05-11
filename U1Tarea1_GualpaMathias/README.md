# componente-mg
Componente personalizado creado con Web Components que nos Mmuestra una tarjeta de presentación reutilizable con imagen, nombre y descripción del usuario.

# Objetivo

Este componente lo que hace es encapsular el diseño y lógica de una tarjeta de presentación asi facilitando su reutilización en distintas páginas web lo que se desarrolló capturas de evidencia para el uso de Shadow DOM, slots y atributos personalizados.

# Uso

Mediante el html tenemos este codigo para el uso de la tarjeta

<componente-mg tema="#dfdfdf" >
      <img slot="foto" src="perfil/perfil.png" alt="Foto de perfil">
      <span slot="nombre">Mathias Elian Gualpa Rivera</span>
      <p slot="descripcion">Esta es mi tarjeta de presentacion 
        Tengo 21 años y estudio en la Universidad de las fuerzas
        Armadas ESPE sede Santo Domingo.</p>
    </componente-mg>
