export class EspeModal extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
    <style>
        .overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.5);
          display: none;
          z-index: 999;
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 24px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          display: none;
          max-width: 400px;
          width: 90%;
          z-index: 1000;
        }

        .modal.open {
          display: block;
        }

        .overlay.show {
          display: block;
        }

        ::slotted(*) {
          display: block;
          text-align: center;
        }

        #cerrar {
          margin: 20px auto 0;
          padding: 10px 20px;
          background-color: #2e86c1;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          display: block;
        }
    </style>

    <div class="overlay"></div>
    <div class="modal">
      <h2><slot name="titulo">Modal por defecto</slot></h2>
      <p><slot name="contenido">Contenido por defecto</slot></p>
      <button id="cerrar">Cerrar</button>
    </div>
    `;
    this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#cerrar').addEventListener('click', function() {
      this.close();
    }.bind(this));
  }

  open() {
    this.shadowRoot.querySelector('.modal').classList.add('open');
    this.shadowRoot.querySelector('.overlay').classList.add('show');

    this.dispatchEvent(new CustomEvent('mi-evento-mg', {
      bubbles: true,
      composed: true,
      detail: { mensaje: 'El modal se ha abierto' }
    }));
  }

  close() {
    this.shadowRoot.querySelector('.modal').classList.remove('open');
    this.shadowRoot.querySelector('.overlay').classList.remove('show');

    this.dispatchEvent(new CustomEvent('mi-evento', {
      bubbles: true,
      composed: true,
      detail: { mensaje: 'El modal se ha cerrado' }
    }));

    this.dispatchEvent(new CustomEvent('modal-cerrado', { bubbles: true, composed: true }));
  }
}

customElements.define('espe-modal', EspeModal);
