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
        width: 319px;
        height: 150px;
        object-fit: cover;
      }
    };
      </style>
     
      <div >
<img sizing="cover" class="img-fluid" preload src="../../images/doctor.jpg" />

<departments-comp></departments-comp>
</div>
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