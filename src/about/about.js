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
    .pad-table{
      padding:20px;
    }
   .center-box{
     width:80%;
     margin:0 auto;
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
<div class="center-box">

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


      <div class="pad-table">
      <table>
          <tr>
          <th>No</th>
          <th>Patient</th>
          <th>Doctor</th>
          <th>Date</th>
          <th>Time</th>
          <th>Contact</th>
          </tr>
          <tr>
          <td>1</td>
          <td>Madhu</td>
          <td>Dr. Zinia Zara</td>
          <td>January 10, 2021</td>
          <td>10:00 AM</td>
          <td>9898457654</td>
          </tr>
          <tr>
          <td>2</td>
          <td>Kumar</td>
          <td>Dr. Nadim Kamal</td>
          <td>January 11, 2021</td>
          <td>11:00 AM</td>
          <td>9898458551</td>
          </tr>
          <tr>
          <td>3</td>
          <td>Shakar</td>
          <td>Dr. Rihana Roy</td>
          <td>January 12, 2021</td>
          <td>12:00 PM</td>
          <td>8984576234</td>
          </tr>
          <tr>
          <td>4</td>
          <td>Rahul</td>
          <td>Dr. Steven Roy</td>
          <td>January 13, 2021</td>
          <td>01:00 PM</td>
          <td>7698457652</td>
          </tr>
          <tr>
          <td>5</td>
          <td>Sankar</td>
          <td>Dr. Zinia Zara</td>
          <td>January 14, 2021</td>
          <td>02:00 PM</td>
          <td>8898457651</td>
          </tr>
          <tr>
          <td>6</td>
          <td>Rajesh</td>
          <td>Dr. Zinia Zara</td>
          <td>January 15, 2021</td>
          <td>03:00 PM</td>
          <td>9898457654</td>
          </tr>
    </table>
    </div>
</div>
      `
     
    }
    static get properties() {
      return {
        
       
      }

    }
}


window.customElements.define('about-comp', About);