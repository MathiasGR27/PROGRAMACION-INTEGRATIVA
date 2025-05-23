# Tareas Web Components Mathias Gualpa

Este proyecto demuestra la creación e integración de **componentes personalizados (Web Components)** usando JavaScript moderno, Shadow DOM, slots, atributos dinámicos y eventos personalizados. Está compuesto por tres componentes principales:

1. `<componente-mg>`: Tarjeta de presentación.
2. `<formulario-mg>`: Formulario para modificar la tarjeta.
3. `<espe-modal>`: Modal emergente con información adicional.

---

## Componente 1: `<componente-mg>`

### Objetivo
Mostrar una tarjeta de presentación con diseño personalizado, utilizando Shadow DOM para encapsular estilos y contenido. Incluye slots para contenido dinámico como la foto, el nombre y la descripción del usuario.

### Características
- Usa Shadow DOM para aislamiento de estilos.
- Utiliza `slots` con nombres (`foto`, `nombre`, `descripcion`).
- Acepta un atributo personalizado llamado `tema` para cambiar el fondo.

### Ejemplo de uso explicado

<componente-mg tema="#d6eaf8">
  <img slot="foto" src="perfil/perfil.png" alt="Foto de perfil" />
  <span slot="nombre">Mathias Elian Gualpa Rivera</span>
  <p slot="descripcion">
    Esta es mi tarjeta de presentación. Tengo 21 años y estudio en la Universidad de las Fuerzas Armadas ESPE, sede Santo Domingo.
  </p>
</componente-mg>

## Componente 2: `<formulario-mg>`

## Objetivo
Permitir la modificación dinámica del contenido del componente <componente-mg> a través de un formulario. Facilita la interacción entre componentes personalizados mediante el DOM.

## Características
Shadow DOM para encapsular el estilo del formulario.

Utiliza slots para insertar botones personalizados.

Permite actualizar el contenido del componente <componente-mg> sin recargar la página.

Comunicación directa entre componentes usando JavaScript.

## Ejemplo de uso explicado

Mediante un formulario en donde pide el nuevo nombre o otro color para la tarjeta lo que hacemos es que con el boton de 
<formulario-mg>
  <button slot="boton-enviar">Actualizar tarjeta</button>
</formulario-mg>
Lo que hace es que en ese momento actualiza el componente-mg con los datos que se ingreso en el formulario

## ¿Qué hace este componente?

El formulario incluye campos de entrada para imagen, nombre y descripción.

Cuando el usuario llena los campos y hace clic en el botón “Actualizar tarjeta”, el componente busca el primer <componente-mg> en la página y actualiza dinámicamente sus slots (foto, nombre, descripcion) con los nuevos valores.


## Componente 3: `<espe-modal>`

## Objetivo
Mostrar un modal emergente reutilizable que despliega información adicional. Se puede controlar externamente con métodos y comunica eventos personalizados.

## Características
Shadow DOM para encapsular estilos y estructura.

Slots para insertar titulo y contenido de manera flexible.

Métodos públicos open() y close() para mostrar/ocultar el modal.

Emisión del evento personalizado modal-cerrado al cerrarse.

## Ejemplo de uso explicado

Aqui lo que se hizo es agregar un ES MODULES para modularizar componentes y asi se creo un componente avanzado el cual 
mediante un boton se nos abre un modal eel cual nos muestra lo siguiente: 
<espe-modal id="modalAvanzado">
  <span slot="titulo">Información Adicional</span>
  <p slot="contenido">Me gusta mucho jugar fútbol y también programar.</p>
</espe-modal>
y al momento de abrir el modal hay un evente personalizado el cual nos muestra un mensaje de tipo alerta que sale cuando se abre o se cierra el modal

<button class="boton-abrir" onclick="document.getElementById('modalAvanzado').open()">Abrir Información</button>


## ¿Qué hace este componente?

Al presionar el botón externo, se invoca el método .open() para mostrar el modal.

Dentro del modal hay un botón de cierre (#cerrar), que activa .close().

Cuando se cierra el modal, se lanza el evento modal-cerrado, lo cual permite a otros elementos del DOM reaccionar (por ejemplo: mostrar un mensaje, ejecutar código, etc).
