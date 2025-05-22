class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["img", "title", "description", "price", "colletion"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
      this.render();
      this.addEventListeners();
    }
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  addEventListeners() {
    const plus = this.shadowRoot.getElementById("plus");
    const minus = this.shadowRoot.getElementById("minus");
    const qtyValue = this.shadowRoot.getElementById("qty-value");
    const addToCartBtn = this.shadowRoot.querySelector(".add-to-cart");
  
    let qty = 1;
  
    if (plus && minus && qtyValue) {
      plus.addEventListener("click", () => {
        qty++;
        qtyValue.textContent = qty;
      });
  
      minus.addEventListener("click", () => {
        if (qty > 1) qty--;
        qtyValue.textContent = qty;
      });
    }
  
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        const product = {
          title: this.title,
          price: this.price,
          quantity: qty,
          img: this.img,
        };
        this.dispatchEvent(new CustomEvent("add-to-cart", {
          detail: product,
          bubbles: true,
          composed: true
        }));
      });
    }
  }
  

  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <article class="card">
        <div class="image-container">
          <img src="${this.img}" alt="${this.title}" />
        </div>
        <div class="card-body">
          <span class="category">${this.colletion || "Category"}</span>
          <h2 class="title">${this.title}</h2>
          <p class="description">${this.description}</p>
          
          <div class="rating">
            <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>
          </div>

          <div class="price-section">
            <span class="price">${this.price}</span>
            <div class="quantity">
              <button id="minus">-</button>
              <span id="qty-value">1</span>
              <button id="plus">+</button>
            </div>
          </div>

          <button class="add-to-cart">ADD TO CART</button>
        </div>
      </article>

      ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
      <style>
        * {
          box-sizing: border-box;
        }
  
        .card {
          width: 300px;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          font-family: 'Segoe UI', sans-serif;
          transition: transform 0.3s ease;
        }
  
        .card:hover {
          transform: translateY(-5px);
        }
  
        .image-container {
          width: 100%;
          height: 200px;
          background: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
  
        .image-container img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
        }
  
        .card-body {
          padding: 20px;
        }
  
        .category {
          background: #eef3ff;
          color: #3267e3;
          font-size: 0.8em;
          padding: 4px 10px;
          border-radius: 6px;
          display: inline-block;
          margin-bottom: 10px;
        }
  
        .title {
          font-size: 1.2em;
          color: #2266cc;
          font-weight: 700;
          margin: 0 0 10px;
        }
  
        .description {
          font-size: 0.9em;
          color: #555;
          margin-bottom: 10px;
        }
  
        .rating span {
          color: #ffc107;
          font-size: 1em;
        }
  
        .price-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 15px;
        }
  
        .price {
          font-size: 1.5em;
          font-weight: bold;
          color: #111;
        }
  
        .quantity {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #f2f2f2;
          border-radius: 10px;
          padding: 5px 10px;
        }
  
        .quantity button {
          background: none;
          border: none;
          font-size: 1.2em;
          cursor: pointer;
          color: #333;
        }
  
        .quantity span {
          font-size: 1em;
          min-width: 20px;
          text-align: center;
        }
  
        .add-to-cart {
          margin-top: 20px;
          width: 100%;
          padding: 12px 0;
          background: #ffc107;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          color: #111;
          font-size: 1em;
          cursor: pointer;
          transition: background 0.3s ease;
        }
  
        .add-to-cart:hover {
          background: #e6aa00;
        }
  
        /* Media query para pantallas pequeñas */
        @media (max-width: 480px) {
          .card {
            width: 90vw;
            max-width: 320px;
          }
          .card-body {
            padding: 15px;
          }
          .title {
            font-size: 1.1em;
          }
          .description {
            font-size: 0.85em;
          }
          .price {
            font-size: 1.3em;
          }
        }
      </style>
    `;
  }
  
}

customElements.define("product-card", ProductCard);
