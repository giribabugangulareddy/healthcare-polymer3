import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import'../departments/departments.js';

class Home extends PolymerElement {
  
  static get template() {
    return html`
      <style>
     img {
        width: 100%;
        background-color: lightgray;
      }
     
      .img-fluid{
        object-fit: contain;
    }

    @media screen and (max-width:320px){
      .img-fluid{
        width: 308px;
        height: 150px;
        object-fit: cover;
      }
    };
      </style>
     
      <div >
<img sizing="cover" class="img-fluid" preload src="../../images/doctor.jpg" />
</div>
<departments-comp myname="[[myname]]"></departments-comp>
<h1>{{myname}}</h1>

      `

  }

  static get properties() {
    return {
      myname:{
        type:String,
        notify:true,
        
      }
    }
  }
}


window.customElements.define('home-comp', Home);