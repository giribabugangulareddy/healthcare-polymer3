/**Import the Polymer library and html helper function
* Import the Polymer iron-icons
* Import the Polymer paper-dialog
* Import the Polymer iron-image
* Import the Polymer paper-spinner
**/


import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-dialog/paper-dialog.js';




class Dashboard extends PolymerElement {
    
    static get template() {
      return html`

      <style>
      paper-spinner{
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
      }
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
    .pad-table p{
        border: 1px solid #ccc;
        margin: 0;
        border-bottom: none;
        padding: 15px 15px 45px;
        font-size: 20px;
        font-family: 'Roboto';
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
      .bg-color{
        background: #cccccc1a;
      }
      .head-tr,.head-tr:hover{
        background: #396cf0;
        color: #fff;
      }
      table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
        border: 1px solid #ccc;
        border-top: none;
      }
      tr:hover {
        background-color: #ffff99;
  }
      td, th {
        border-bottom: 1px solid #dddddd;
        text-align: left;
        padding: 14px;
      }
      /* responsive code of hospital cards */
      @media screen and (max-width:1200px){
          .box{
              width: 25%;
          }
         
      }
      @media screen and (max-width:767px){
        .center-box{
            width:100%;
        }
        td, th{
            padding: 8px;
            font-size: 14px;
        }
        .pad-table p{
            padding: 15px 15px 37px;
            font-size: 18px;
        }
      }
      @media screen and (max-width:600px){
          .box{
              width: 70%;
          }
      }
      @media screen and (max-width:480px){
        .pad-table{
            padding: 5px;
        }
        td, th {
            padding: 5px;
            font-size: 11px;
        }
      }
      .confirm-btn{
          float:right;
      }

      </style>



<!-- staring of hospital info cards -->
<div class="bg-color">
<div class="center-box">
<div>
<div class="container-box">

    <!-- Doctors -->

    <div class="box">
        <div class="card">
            <div >
            <iron-icon icon="icons:account-circle"></iron-icon>
                <h5 class="middle-align">Doctors</h5>
                <h5 class="middle-align">2,234</h5>
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
                <h5 class="middle-align">4,123</h5>
            </div>
        </div>
    </div>

    <!-- Pharmacist -->

    <div class="box">
        <div class="card">
            <div >
            <iron-icon icon="icons:work"></iron-icon>
                <h5 class="middle-align">Pharmacist</h5>
                <h5 class="middle-align">2,973</h5>
            </div>
        </div>
    </div>

    <!-- New events -->

    <div class="box">
        <div class="card">
            <div >
            <iron-icon icon="icons:event"></iron-icon>
                <h5 class="middle-align">New events</h5>
                <h5 class="middle-align">1,973</h5>
            </div>
        </div>
    </div>

    <!-- Reports -->

    <div class="box">
        <div class="card">
            <div >
            <iron-icon icon="icons:assignment"></iron-icon>
                <h5 class="middle-align">Reports</h5>
                <h5 class="middle-align">5,973</h5>
            </div>
        </div>
    </div>
</div>
</div>



<!-- iron-ajax is used to call the tabledata url and get the tabel data from tabledata.json file in local-->
<iron-ajax 
    auto 
    url="../../data/tableData.json" 
    handle-as="json" 
    last-response="{{response}}">
</iron-ajax>


<!-- showing data from iron-ajax api response -->
<div class="pad-table">
    <p>Recent appointments</p>
      <table>
        <thead>
            <tr class="head-tr">
                <th>No</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Contact</th>
            </tr>
        </thead>
          
        <tbody>

            <!-- dom-repate used to iterate an array values from iron-jax respose -->

            <template is="dom-repeat" items="{{response.sourceData}}">
                <tr>
                    <td>[[item.id]]</td>
                    <td>[[item.Patient]]</td>
                    <td>[[item.Doctor]]</td>
                    <td>[[item.Date]]</td>
                    <td>[[item.Time]]</td>
                    <td>[[item.Contact]]</td>
                </tr>
            </template>
        </tbody>
    </table>
    
</div>
      
</div>
</div>



      `;
     
    }

  
};

//registering into the webbrowser using cusomelement
window.customElements.define('dashboaed-comp', Dashboard);