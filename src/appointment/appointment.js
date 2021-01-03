import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';


import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-button/paper-button.js';

class Appointment extends PolymerElement {
  static get template() {
    return html`
      <style>
      .banner-img {
        width: 100%;
        height: 200px;
        background-color: lightgray;
      }

      .flex-container {
        display: flex;
        align-items: stretch;
      }

      .flex-container .width {
        color: white;
        margin: 25px;
        text-align: center;
        font-size: 18px;
      }
      .container{
        width:80%;
        margin:0 auto;
        margin-top: 5em;
      }
      .consult-img{
        width: 150px;
        height: 70px;
      }
      .right-box-flex{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background-color: #396cf0;
      }
      .right-img{
        padding:20px
      }
      .align-right-box{
        text-align: left;
        padding: 15px;
        font-family: 'Roboto';
      }
      .align-right-box p{
        font-size: 14px;
      }
      .flex-message{
        border: 1px solid #ccc;
        text-align: left;
        display: flex;
        flex-direction: row;
        padding: 20px;
        width: 50%;
        background: #fff;
        margin-top: 30px;
      }
      .time-box{
        padding: 15px;
        border-right: 1px solid #ccc;
        font-family: 'Roboto';
        font-size: 15px;
        color: #000;
        text-align: center;
      }
      .timeings{
        padding: 12px;
        font-size: 13px;
        font-family: 'Roboto';
        color: #396cf0;
        line-height: 2;
      }
      .icon-color{
        color: #396cf0;
        margin-bottom: 7px;
      }
      .bg-color{
        background-color:#dce5ec6b;
      }

      .left-box{
        border:1px solid #ccc;
        text-align: left;
        padding: 30px;
      }
      .title{
          text-align:center;
          color:#000;
          font-size: 22px;
          font-family: 'Roboto';
      }

      .sub-btn{
          padding: 15px 0;

      }

      paper-dropdown-menu {
        --paper-dropdown-menu: {
          left:0 !important;
          width:100% !important;
        } 
    }

    paper-button.custom {
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }
    paper-button.indigo {
      font-weight: 300;
      text-transform: inherit;
      min-width: 6.14em;
      font-size: 15px;
      background-color: var(--paper-indigo-500);
      color: white;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }

    @media (max-width: 1200px) {

      .container {
        width: 95%;
      }
      .timeings{
        font-size: 12px;
      }
    }
    @media (max-width: 992px) {
      .flex-container{
        display: block;
        width: 80%;
        margin:0 auto;
      }
      .flex-message {
        width: 94%;
        padding: 14px;
      }
    }

    @media (max-width: 767px) {
      .right-box-flex {
        flex-direction: column;
      }
     
    }
    @media (max-width: 600px){
     
    
    .flex-container {
      width: 100%;
    }

  }
  @media (max-width: 480px){
    .flex-message {
      width: 92%;
  }
  .flex-container .width{
    margin: 0;
  }
  .align-right-box h2{
    font-size: 22px;
  }
      </style>

     
<div class="bg-color">

<div>
    <iron-image class="banner-img" sizing="cover" preload src="../../images/doctor4.png"></iron-image>
</div>

<div class="container">
<div class="flex-container">
  <div class="width" style="flex-grow: 8">
 
  <div class="left-box">

        <h1 class="title">Make An Appointment</h1>
        <iron-form id="formOne" on-iron-form-response="onResponse">
          <form method="post" action="https://httpbin.org/post" is="iron-form">

          <paper-input label="User Name" name="username" auto-validate pattern="[a-zA-Z]*" error-message="letters only!" value=""></paper-input>
            
          <paper-input label="Phone Number" name="phone" auto-validate pattern="[0-9]*" error-message="letters only!" value=""></paper-input>

         <div>
         <paper-dropdown-menu label="Select Service" >
         <paper-listbox slot="dropdown-content" name="Service" selected="{{selected}}" class="dropdown-content custom" horizontalAlign='left'>
           <paper-item >Gynaecology</paper-item>
           <paper-item>Orthopaedics</paper-item>
           <paper-item>Lense Expert</paper-item>
           <paper-item>Cardiology</paper-item>
           <paper-item>Associate Eye</paper-item>
           <paper-item>Gastroenterology</paper-item>
         </paper-listbox>
      </paper-dropdown-menu>
         </div>

         <div>
         <paper-dropdown-menu label="Select Doctor" >
         <paper-listbox slot="dropdown-content" selected="1" class="dropdown-content custom" horizontalAlign='left'>
           <paper-item >Dr. Zinia Zara</paper-item>
           <paper-item>Dr. Nadim Kamal</paper-item>
           <paper-item>Dr. Rihana Roy</paper-item>
           <paper-item>Dr. Steven Roy</paper-item>
           <paper-itemDr. Johora Roy</paper-item>
           <paper-item>Dr. Jason Roy</paper-item>
         </paper-listbox>
      </paper-dropdown-menu>
         </div>

         <div>
         <paper-dropdown-menu label=" Select Available Date" >
         <paper-listbox slot="dropdown-content" selected="1" class="dropdown-content custom" horizontalAlign='left'>
           <paper-item>January 10, 2021</paper-item>
           <paper-item>January 11, 2021</paper-item>
           <paper-item>January 12, 2021</paper-item>
           <paper-item>January 13, 2021</paper-item>
           <paper-item>January 14, 2021</paper-item>
           <paper-item>January 15, 2021</paper-item>
         </paper-listbox>
      </paper-dropdown-menu>
         </div>


         <div>
         <paper-dropdown-menu label="Select Time" >
         <paper-listbox slot="dropdown-content" selected="1" class="dropdown-content custom" horizontalAlign='left'>
           <paper-item >10:00 AM</paper-item>
           <paper-item>11:00 AM</paper-item>
           <paper-item>12:00 PM</paper-item>
           <paper-item>02:00 PM</paper-item>
           <paper-item>03:00 PM</paper-item>
           <paper-item>04:00 PM</paper-item>
         </paper-listbox>
      </paper-dropdown-menu>
         </div>


         <div>
         <paper-dropdown-menu label="Select Appointment Fee" >
         <paper-listbox slot="dropdown-content" selected="" class="dropdown-content custom" horizontalAlign='left'>
         <paper-item >Select Fee</paper-item>
           <paper-item >Adult (Rs 400/-)</paper-item>
           <paper-item >Child (Rs 200/-)</paper-item>
          
         </paper-listbox>
      </paper-dropdown-menu>
         </div>

         <div class="sub-btn">
         <paper-button raised class="custom indigo"  on-tap="submitHandler" >Submit</paper-button>
         </div>
          </form>
        </iron-form>
  </div>
  
  
  </div>
 
  <div  class="width" style="flex-grow: 4">
  
  <div class="right-box-flex">
    <div class="align-right-box">
      <h2>How are feeling today ?</h2>
      <p> Get unlimited doctor consultations and more much with pluse admin
  </div>
  <div class="right-img">
      <iron-image class="consult-img" sizing="cover" preload src="../../images/consulting.png"></iron-image>
  </div>
  
<div>

</div>
  </div>
  
  <div class="flex-message">
    <div class="time-box">
      <iron-icon icon="alarm" class="icon-color"></iron-icon></br>
      <span>open Hours
    </div>
    <div class="timeings">
      <div>Monday-Saturday:10:00AM - 07:00PM </br> Sunday: 12:00PM - 05:00PM</div>
    </div>
  </div>

  </div>
</div>

</div>
</div>

      `

  }
  static get properties() {
    return {
        
      selected: {
            type: String,
            value: ''
        }
    }
  }

  submitHandler() {
    this.$.formOne.submit();
  }
  onResponse(e) {
    this.response = JSON.stringify(e.detail.response.form, null, 2);
    console.log(' this.response', this.response)
    
  }
}

window.customElements.define('appointment-comp', Appointment);