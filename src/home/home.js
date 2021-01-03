import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
// import'../departments/departments.js';
import'../about/about.js';

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
<about-comp></about-comp>
<h1>Am Home </h1>
      `

  }
}


window.customElements.define('home-comp', Home);