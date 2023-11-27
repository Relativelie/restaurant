class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
    <style>
      #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0,0,0,0.75);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
      }

      :host([opened]) #backdrop,
      :host([opened]) #modal {
          opacity: 1;
          pointer-events: all;
      }

      :host([opened]) #modal {
          top: 15vh;
      }

      #modal {
          position: fixed;
          top: 10vh;
          left: 25%;
          width: 60%;
          z-index: 100;
          background: white;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.26);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease-out;
          background-color: rgba(255, 255, 255, 0.563);
          backdrop-filter: blur(3px);
      }

      #modal__main {
          padding: 1rem;
      }

      .close-btn_container {
          display: flex;
          justify-content: flex-end;
          position: relative;
      }

      #close-btn {
          position: absolute;
          z-index: 100;
          cursor: pointer;
          background: none;
          color: inherit;
          border: none;
          padding: 0;
          font: inherit;
          cursor: pointer;
          outline: inherit;
      }
      
      #close-btn img {
          width: 40px;
      }

      @media all and (max-width: 580px) {
        #modal {
          top: 10vh;
          left: 0;
          right: 0;
          width: 100%;
        }
      }

    </style>
    <div id="backdrop"></div>
    <div id="modal">
      <div class="close-btn_container">
        <button id="close-btn">
          <img src="assets/png/close.png" alt="close button" />
        </button>
      </div>
      <section id="modal__main">
          <slot></slot>
      </section>
    </div>
        `;

    const backdrop = this.shadowRoot.querySelector('#backdrop');
    const closeButton = this.shadowRoot.querySelector('#close-btn');
    backdrop.addEventListener('click', this.hide.bind(this));
    closeButton.addEventListener('click', this.hide.bind(this));
    document.addEventListener(
      'keydown',
      (e) => e.key === 'Escape' && this.hasAttribute('opened') && this.hide(e),
    );
  }

  attributeChangedCallback() {
    if (this.hasAttribute('opened')) {
      this.isOpen = true;
    } else {
      this.isOpen = false;
    }
  }

  static get observedAttributes() {
    return ['opened'];
  }

  open() {
    this.setAttribute('opened', '');
    this.isOpen = true;
  }

  hide(event) {
    if (this.hasAttribute('opened')) {
      this.removeAttribute('opened');
    }
    this.isOpen = false;

    if (event) {
      const hideEvent = new Event('hide', { bubbles: true, composed: true });
      event.target.dispatchEvent(hideEvent);
    }
  }
}

customElements.define('fc-modal', Modal);
