import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-image/iron-image.js';

class Departments extends PolymerElement {
    static get template() {
      return html`
      <style>
      
      .grid {
        @apply --layout-horizontal;
        @apply --layout-center-center;
        @apply --layout-wrap;
        margin-top: 10px;
      }
      .grid > .item {
        flex: 1 calc(33% - 20px);
        max-width: calc(30% - 20px);
        height: 20vmax;
        min-height: 240px;
        margin: 25px;
        text-decoration: none;
        
      }
      
      .container{
        width:80%;
        margin:0 auto;
      }
    .text-center{
      text-align: center;
      padding: 30px;
      margin-top: 0;
    }

    .image{
      width: 356px;
      height: 238px;
      object-fit: contain;
      border: 1px solid #ccc;
      border-radius: 10px;
  
    }
    .caption{
      text-align: center;
    font-size: 22px;
    font-family: sans-serif;
    padding: 15px;
    }
    .bg-color{
      background: #cccccc1a;
    }
    @media (max-width: 1200px) {
      .grid {
        padding-left: 10px;
        padding-right: 10px;
        font-size: 0.7em;
      }
      .grid > .item {
        -webkit-flex: 1 calc(50% - 20px);
        flex: 1 calc(50% - 20px);
        max-width: calc(50% - 20px);
        margin: 10px;
        text-decoration: none;
        background-color: white;
      }
    }

    @media (max-width: 480px) {
      .grid {
        padding-left: 10px;
        padding-right: 10px;
      }
      .grid > .item {
        -webkit-flex: 1 calc(100% - 10px);
        flex: 1 calc(1000% - 10px);
        max-width: calc(100% - 10px);
        margin: 5px;
        text-decoration: none;
        background-color: white;
      }
    }


      </style>
     
<div class="bg-color">

<h1 class="text-center">Departments </h1>


<div class="container">
<div class="grid">

<div  class="item" >
<iron-image class="image"  preload src="../../images/deprt1.jpg"></iron-image>
<div class="caption">Dental Care</div>
</div>

<div  class="item" >
<iron-image class="image"  preload src="../../images/depart2.jpg"></iron-image>
<div class="caption">Dental Care</div>
</div>

<div  class="item" >
<iron-image class="image"  preload src="../../images/depart3.jpg"></iron-image>
<div class="caption">Dental Care</div>
</div>

<div  class="item" >
<iron-image class="image"  preload src="../../images/depart3.jpg"></iron-image>
<div class="caption">Dental Care</div>
</div>

<div  class="item" >
<iron-image class="image"  preload src="../../images/depart4.jpg"></iron-image>
<div class="caption">Dental Care</div>
</div>

<div  class="item" >
<iron-image class="image"  preload src="../../images/depart6.jpg"></iron-image>
<div class="caption">Dental Care</div>
</div>

</div>

</div>
</div>


      `

    }
}


window.customElements.define('departments-comp', Departments);