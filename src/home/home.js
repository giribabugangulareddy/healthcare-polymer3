// Import the Polymer library and html helper function
// Import the Polymer iron-image
// 
// Import departments-page

import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import'../departments/departments.js';

class Home extends PolymerElement {
  
  static get template() {
    return html`
      <style>
     
     
      .img-fluid{
        width: 100%;
        background-color: lightgray;
         object-fit: contain;
    }

    @media screen and (max-width:320px){
      .img-fluid{
        width: 306px;
        height: auto;
        object-fit: contain;
      }
    };
      </style>
     
      <!-- landing page banner image-->
      <div>
        <img sizing="cover" class="img-fluid" preload src="../../images/doctor.jpg" />

        <!--appending the department component page -->
        <departments-comp></departments-comp>
      </div>
      `;

  };


};


//registering into the webbrowser using cusomelement
window.customElements.define('home-comp', Home);