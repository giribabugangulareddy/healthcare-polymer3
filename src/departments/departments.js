import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-image/iron-image.js';

class Departments extends PolymerElement {
  static get template() {
    return html`
    <style>
    
    .card-view {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      flex-direction: row;
     
    }
    .image{
      width: 380px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .caption{
      text-align: center;
      font-size: 22px;
      font-family: sans-serif;
      margin: 10px;
    }
    .square {
      width: initial;
      height: 340px;
      margin: 10px;
      display: inline-block;
    }
    .text-center{
      text-align: center;
      padding: 30px;
      margin-top: 0;
      font-family: sans-serif;
    }
    .bg-color{
      background: #cccccc1a;
    }
    @media screen and (max-width:480px){
      .text-center{
        font-size: 24px;
      }
      .image{
        width: 300px;
      }
      .card-view {
        text-align:center;
        display: block;
      }
    }
    </style>
    <div class="bg-color">

    <h1 class="text-center">Departments </h1>

    <div class="card-view">
    <div class="square">
    <iron-image class="image"  preload src="../../images/deprt1.jpg"></iron-image>
    <p class="caption">Detail Care</p>
    </div>
    <div class="square">
    <iron-image class="image"  preload src="../../images/depart2.jpg"></iron-image>
    <p class="caption">Eye Care</p>
    </div>
    <div class="square">
    <iron-image class="image"  preload src="../../images/depart3.jpg"></iron-image>
    <p class="caption">Cardiology </p>
    </div>
    <div class="square">
    <iron-image class="image"  preload src="../../images/depart4.jpg"></iron-image>
    <p class="caption">Orthopaedics </p>
    </div>
    <div class="square">
    <iron-image class="image"  preload src="../../images/depart5.jpg"></iron-image>
    <p class="caption">Gynaecology </p>
    </div>
    <div class="square">
    <iron-image class="image"  preload src="../../images/depart6.jpg"></iron-image>
    <p class="caption">Gastroenterology </p>
    </div>
  </div>
  </div>
  
    `
   
  }

}


window.customElements.define('departments-comp', Departments);