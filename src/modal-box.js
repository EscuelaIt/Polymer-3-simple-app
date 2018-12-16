import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';


class ModalBox extends PolymerElement {
  static get properties() {
    return {
      opened: {
        type: Boolean,
        value: false,
        observer: 'openedChanged'
      },
      modalClass: {
        type: String,
        value: 'closed'
      }
    }
  }

  static get template() {
    return html`
    <style>
      div {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        z-index: 100;     
        background-color: rgba(30,30,30, 0.8);
        transition: opacity 0.8s ease-in;
      }
      section {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url(/images/escuelait-logo.png);
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: 98%;
        background-size: 100px;
        width: 500px;
        height: 300px;
        max-width: 90%;
        max-height: 90%;
        z-index: 1001;
        background-color: #fff;
        transition: opacity 0.8s ease-in;
        box-shadow: 6px 6px 16px #000;
        border-radius: 10px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
      }
      article {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 20px;
      }
      span{
        position: absolute;
        top: 10px;
        right: 20px;
        z-index: 1002; 
      }
      span img {
        width: 30px;
        height: 30px;
        cursor: pointer;
      }
      .transparent {
        opacity: 0;
      }
      .opaque {
        opacity: 1;
      }
      .closed {
        display: none;
      }
      </style>
    <div class$="[[modalClass]]"></div>
    <section class$="[[modalClass]]">
      <span on-click="close"><img src="/images/close.png" alt="Cerrar"></span>  
      <article>
          <slot></slot>
      </article>
    </section>
    `;
  }

  // getModalClass(opened) {
  //   if(opened) {
  //     return '';
  //   }
  //   return 'closed';
  // }

  openedChanged(opened) {
    if(opened) {
      this.modalClass = 'transparent';
      setTimeout(() => {
        this.modalClass = 'opaque';
      }, 1);
    } else {
      this.modalClass = "transparent";
      setTimeout(() => {
        this.modalClass = 'closed';  
      }, 800);
      
    }
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }
}

customElements.define('modal-box', ModalBox);