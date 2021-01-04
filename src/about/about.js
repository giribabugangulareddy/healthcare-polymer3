import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-image/iron-image.js';



class About extends PolymerElement {
    static get template() {
      return html`
      <style>

    .middle-align {
      font-weight: 400 !important;
      margin: 10px;
      font-size: 15px;
      font-family: 'Roboto';
    }
    iron-icon{
      padding: 12px;
      color: #ff3475;
    }
   
    .card{
      background: #fff;
      border: 1px solid #e4e9f0;
      width: 100%;
      min-width: 100%;
  
  }
    .container-box{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-flow: wrap;
    }
    .box{
        width: 13%;
        height: 100px;
        background: yellow;
        margin: 20px;
        box-sizing: border-box;
        font-size: 16px;
        margin-bottom: 60px;
        text-align: center;
    }
    
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        font-size: 30px;
       
      }

      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      /* responsive code of hospital cards */
      @media screen and (max-width:1200px){
          .box{
              width: 25%;
          }
         
      }
      
      @media screen and (max-width:600px){
          .box{
              width: 70%;
          }
      }
      

      </style>
      
      <!-- staring of hospital info cards -->
      <div>
          <div class="container-box">
              <!-- Doctors -->
              <div class="box">
                  <div class="card">
                      <div >
                      <iron-icon icon="icons:account-circle"></iron-icon>
                          <h5 class="middle-align">Doctors</h5>
                          <h5 class="middle-align">3,973</h5>
                      </div>
                  </div>
              </div>
              <!-- Patients -->
              <div class="box">
                  <div class="card">
                      <div >
                      <iron-icon icon="icons:assignment-ind"></iron-icon>
                          <h5 class="middle-align">Patients</h5>
                          <h5 class="middle-align">3,973</h5>
                      </div>
                  </div>
              </div>
              <!-- Nurses -->
              <div class="box">
                  <div class="card">
                      <div >
                      <iron-icon icon="icons:supervisor-account"></iron-icon>
                          <h5 class="middle-align">Nurses</h5>
                          <h5 class="middle-align">3,973</h5>
                      </div>
                  </div>
              </div>
              <!-- Pharmacist -->
              <div class="box">
                  <div class="card">
                      <div >
                      <iron-icon icon="icons:work"></iron-icon>
                          <h5 class="middle-align">Pharmacist</h5>
                          <h5 class="middle-align">3,973</h5>
                      </div>
                  </div>
              </div>
              <!-- New events -->
              <div class="box">
                  <div class="card">
                      <div >
                      <iron-icon icon="icons:event"></iron-icon>
                          <h5 class="middle-align">New events</h5>
                          <h5 class="middle-align">3,973</h5>
                      </div>
                  </div>
              </div>
              <!-- Reports -->
              <div class="box">
                  <div class="card">
                      <div >
                      <iron-icon icon="icons:assignment"></iron-icon>
                          <h5 class="middle-align">Reports</h5>
                          <h5 class="middle-align">3,973</h5>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>
      `
     
    }
    static get properties() {
      return {
        
       
      }

    }
}


window.customElements.define('about-comp', About);