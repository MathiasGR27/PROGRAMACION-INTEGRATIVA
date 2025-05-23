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

# formulario-mg

# Objetivo
Integrar dos componentes personalizados usando Web Components, Shadow DOM, atributos, y slots.

# Componentes
1. `<componente-mg>`: Primero creamos nuestra tarjeta de presentacion la cual despues se va a poder modificar con el formulario-mg.

2. `<formulario-mg>`: Se creo un formulario el cual nos permite modificar nuestra tarjeta que se creo con el componente-mg.

#  Uso
```html
<componente-mg tema="#d6eaf8">
  <img slot="foto" src="perfil.png" />
  <span slot="nombre">Nombre</span>
  <p slot="descripcion">Descripción</p>
</componente-mg>

<formulario-contacto>
  <button slot="boton-enviar">Actualizar</button>
</formulario-contacto>

