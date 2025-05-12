class Formulariomg extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.shadow.innerHTML = `
    <style>
        form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-width: 320px;
            padding: 20px;
            border: 2px solid #aed6f1;
            border-radius: 12px;
        }

        input[type="text"], input[type="color"] {
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1em;
        }

        ::slotted(button) {
            padding: 10px;
            border: none;
            border-radius: 6px;
            background-color: #2e86c1;
            color: white;
        }
        
    </style>

    <form>
        <label for="nuevo-nombre">Ingresa un nuevo nombre:</label>
        <input type="text" placeholder="Nombre" id="nuevo-nombre">
        <label for="nuevo-color">Ingresa un nuevo color de fondo:</label>
        <input type="color" id="nuevo-color" >
        <slot name="boton-enviar"></slot>
    </form>
    `;
  }
  connectedCallback() {
    const boton = this.shadowRoot.querySelector('slot[name="boton-enviar"]');
    boton.addEventListener('slotchange', () => {
      const btn = boton.assignedElements()[0];
      if (btn) {
        btn.addEventListener('click', () => {
          const nuevoNombre = this.shadowRoot.querySelector('#nuevo-nombre').value;
          const nuevoColor = this.shadowRoot.querySelector('#nuevo-color').value;

          const tarjeta = document.querySelector('componente-mg');
          if (nuevoNombre) {
            const slotNombre = tarjeta.shadowRoot.querySelector('slot[name="nombre"]');
            const nodoNombre = document.querySelector('[slot="nombre"]');
            nodoNombre.textContent = nuevoNombre;
          }
          tarjeta.setAttribute('tema', nuevoColor);
        });
      }
    });
  }
}

customElements.define('formulario-mg', Formulariomg);
