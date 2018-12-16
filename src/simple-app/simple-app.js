import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

//import '@lrnwebcomponents/wikipedia-query/wikipedia-query.js';
import '@lrnwebcomponents/wikipedia-query/wikipedia-query.js';

//import {Button} from "@material/mwc-button";
import '../modal-box';

/**
 * @customElement
 * @polymer
 */
class SimpleApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: inline-block;
          padding: 10px;
        }
        h2 {
          font-size: 0.9em;
          color: red;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <p>Esto es Polymer!!!!!</p>
      <button on-click="doClick">clic</button>
      [[contador]]
      <modal-box id="modal">
        <h2>Modal Box con slot</h2>
        <p>Este es el contenido de mi modal!!</p>
        <p>Podemos poner varias líneas y cualquier contendio en general!!</p>
      </modal-box>
      <button on-click="abrirModal">Abrir Modal</button>

      <wikipedia-query search="madrid"></wikipedia-query>
      <mwc-button>hola</mwc-button>
    `;
  }
  // static get properties() {
  //   return {
  //     prop1: {
  //       type: String,
  //       value: 'EscuelaIT'
  //     },
  //     contador: {
  //       type: Number,
  //       value: 0
  //     }
  //   };
  // }
  
static get properties() {
  return {
    urlConsulta: {
      type: String,
      observer: 'urlCambiada'
    }
  };
}

urlCambiada(nueva, antigua) {
  console.log('la propiedad nueva es:', nueva);
  console.log('la propiedad antigua es:', antigua);
}


calculaEdad(fechaNacimiento) {
  let edad;
  // realizo el calculo para saber la edad dada la fechaNacimiento
  return edad;
}

  doClick() {
    this.prop1 = 'Estamos aprendiendo P.';
    this.contador++;
  }

  abrirModal() {
    this.$.modal.open();
  }
}

window.customElements.define('simple-app', SimpleApp);
