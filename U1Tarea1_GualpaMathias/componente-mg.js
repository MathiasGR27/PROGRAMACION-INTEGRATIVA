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

  
  