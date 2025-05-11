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

# Estilos
class ComponenteMG extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' });
  
      this.shadow.innerHTML = `
        <style>
          .tarjeta{
            border: 1px solid #ccc;
            border-radius: 12px;
            padding: 20px;
            max-width: 300px;
            background-color: #f4f4f4;
            box-shadow: 2px 2px 6px rgba(0,0,0,0.1);
            font-family: Arial, sans-serif;
          }
  
          .nombre {
            font-size: 1.4em;
            font-weight: bold;
            color: #333;
          }
  
          .descripcion {
            margin-top: 10px;
            color: #666;
          }
  
          ::slotted(img) {
            width: 100%;
            border-radius: 8px;
          }
        </style>
  
        <div class="tarjeta">
          <slot name="foto"></slot>
          <div class="nombre">
            <slot name="nombre">Nombre </slot>
          </div>
          <div class="descripcion">
            <slot name="descripcion">Descripción</slot>
          </div>
        </div>
      `;
    }
  
    static get observedAttributes() {
      return ['tema'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'tema') {
          this.shadowRoot.querySelector('.tarjeta').style.backgroundColor = newValue;
        }
    }
  }
  
  customElements.define('componente-mg', ComponenteMG);
  
  
