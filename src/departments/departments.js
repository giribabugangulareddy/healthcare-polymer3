/**Import the Polymer library and html helper function
* Import the Polymer iron-image
* Import the custom shared-styles
**/

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '../styles/shared-styles.js';


class Departments extends PolymerElement {

  static get template() {

    return html`

    <style include="shared-styles">
    .text-center{
      text-align: center;
      padding: 30px;
      margin-top: 0;
      font-family: sans-serif;
    }
    .image{
      width: 375px;
      border: 1px solid #ccc;
      border-radius: 5px;
      height: inherit;
    }
    .bg-color{
      background: #cccccc1a;
    }
    @media screen and (max-width:480px){
      .text-center{
        font-size: 24px;
      }
      .image{
        width: 275px;
      }
      .square{
        padding:0;
        height: 184px;
      }
    };
    </style>


<div class="bg-color">

  <h1 class="text-center">Departments </h1>

    <!--all department images with name -->

    <div class="card-view">

      <div class="square">
          <iron-image class="image" sizing = "contain" preload src="../../images/deprt1.jpg"></iron-image>
          <p class="caption">Detail Care</p>
      </div>
      <div class="square">
          <iron-image class="image"  sizing = "contain" preload src="../../images/depart2.jpg"></iron-image>
          <p class="caption">Eye Care</p>
      </div>
      <div class="square">
          <iron-image class="image" sizing = "contain"  preload src="../../images/depart3.jpg"></iron-image>
          <p class="caption">Cardiology </p>
      </div>
      <div class="square">
          <iron-image class="image" sizing = "contain" preload src="../../images/depart4.jpg"></iron-image>
          <p class="caption">Orthopaedics </p>
      </div>
      <div class="square">
          <iron-image class="image" sizing = "contain"  preload src="../../images/depart5.jpg"></iron-image>
          <p class="caption">Gynaecology </p>
      </div>
      <div class="square">
          <iron-image class="image" sizing = "contain" preload src="../../images/depart6.jpg"></iron-image>
          <p class="caption">Gastroenterology </p>
      </div>
      
  </div>
</div>
  
    `;
   
  }

};

//registering into the webbrowser using cusomelement
window.customElements.define('departments-comp', Departments);