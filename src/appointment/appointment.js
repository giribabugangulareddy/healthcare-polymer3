/**Import the Polymer library and html helper function
* Import the Polymer iron-image
* Import the Polymer iron-icon
* Import the Polymer iron-form
* Import the Polymer paper-input
* Import the Polymer paper-toast
* Import the Polymer paper-dropdown-menu
* Import the Polymer paper-item
* Import the Polymer paper-listbox
* Import the Polymer paper-button
* Import the Polymer paper-spinner
*/

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '../styles/shared-styles.js';

class Appointment extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
      paper-spinner{
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
      }
      .banner-img {
        width: 100%;
        height: 205px;
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
      
      .bg-color{
        background-color:#dce5ec6b;
      }
      
      .indigo{
        width:100%;
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
        width:100%;
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
   
    .custom {
      width: 365px;

    }
    paper-item:hover{
      background:#cccccc;
    }

    #spennerOpacity{
      opacity:1;
    }
    @media (max-width: 1525px) {
      .custom {
        width: 200px;
    }
    }
    @media (max-width: 1200px) {
     
      .banner-img{
        height: 155px;
      }

      .container {
        width: 95%;
      }
      .custom {
        width: 270px;
    }
    }
   
    @media (max-width: 992px) {
      .banner-img {
        height: 140px;
    }
      .flex-container{
        flex-direction: column-reverse;
        width: 80%;
        margin:0 auto;
      }
     
      .custom {
        width: 360px;
    }
    }

    @media (max-width: 767px) {
      .banner-img{
      height: 110px;
      }
    }
    @media (max-width: 600px){
     
    .banner-img {
        height: 90px;
    }
    .flex-container {
      width: 100%;
    }
    .custom {
      width: 350px;
  }
  };
  @media (max-width: 480px){
    .banner-img {
      height: 55px;
  }
    .flex-message {
      width: 92%;
  }
  .flex-container .width{
    margin: 0 0 30px 0;
  }
  .custom {
    width: 250px;
  }
  
  </style>


<!-- paper-spinner is used to showing whenever click on submit button  active is used show and hide-->
<paper-spinner active="[[waiting]]"></paper-spinner>

<!-- app-location is used get rootpath --!>
<app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>   

<div class="bg-color" id="spennerOpacity">
<div>
    <iron-image class="banner-img" sizing="cover" preload src="../../images/doctor4.png"></iron-image>
</div>

<div class="container">
<div class="flex-container">
  <div class="width" style="flex-grow: 8">
 
  <div class="left-box">

        <h1 class="title">Make An Appointment</h1>

        <!-- iron-form is used get form value data  on-iron-form-response -->
        <!-- paper-input add to validtions purpose auto-validate and pattern ,error-message -->
        <iron-form id="formOne" on-iron-form-response="onResponse">
          <form method="post" action="https://httpbin.org/post" is="iron-form">

          <paper-input label="Patient Name" name="patientName" auto-validate pattern="[a-zA-Z]*" error-message="Enter Patient Name " required value=""></paper-input>
            
          <paper-input label="Phone Number" name="phone" auto-validate pattern="[0-9]*" maxlength="10" minlength="10" error-message="Enter Phone Number & should be 10 digits" required value=""></paper-input>

          <!--service dropdown field -->
         <div class="margin-btm">
          <paper-dropdown-menu label="Select Service" class="custom" auto-validate required error-message="Please Select Service ">
            <paper-listbox slot="dropdown-content" name="Service" id="service" attr-for-selected="value"   class="dropdown-content  custom" horizontalAlign='left'>
                <paper-item value="Gynaecology">Gynaecology</paper-item>
                <paper-item value="Orthopaedics">Orthopaedics</paper-item>
                <paper-item value="Lense Expert">Lense Expert</paper-item>
                <paper-item value="Cardiology">Cardiology</paper-item>
                <paper-item value="Associate Eye">Associate Eye</paper-item>
                <paper-item value="Gastroenterology">Gastroenterology</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
         </div>

         <!--Doctor dropdown field -->
         <div class="margin-btm">
          <paper-dropdown-menu label="Select Doctor" auto-validate required error-message="Please Select Doctor">
            <paper-listbox slot="dropdown-content" name="doctor" id="doctor" attr-for-selected="value"  class="dropdown-content custom" required horizontalAlign='left'>
                <paper-item value="Dr. Zinia Zara">Dr. Zinia Zara</paper-item>
                <paper-item value="Dr. Nadim Kamal">Dr. Nadim Kamal</paper-item>
                <paper-item value="Dr. Rihana Roy">Dr. Rihana Roy</paper-item>
                <paper-item value="Dr. Steven Roy">Dr. Steven Roy</paper-item>
                <paper-item value="Dr. Johora Roy"> Dr. Johora Roy</paper-item>
                <paper-item value="Dr. Jason Roy">Dr. Jason Roy</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
         </div>

         <!--Available Date dropdown field -->
         <div class="margin-btm">
            <paper-dropdown-menu label=" Select Available Date" auto-validate required error-message="Please Select Available Date">
              <paper-listbox slot="dropdown-content" id="availableDate" attr-for-selected="value"   class="dropdown-content custom" horizontalAlign='left'>
                <paper-item value="January 10, 2021">January 10, 2021</paper-item>
                <paper-item value="January 11, 2021">January 11, 2021</paper-item>
                <paper-item value="January 12, 2021">January 12, 2021</paper-item>
                <paper-item value="January 13, 2021">January 13, 2021</paper-item>
                <paper-item value="January 14, 2021">January 14, 2021</paper-item>
                <paper-item value="January 15, 2021">January 15, 2021</paper-item>
              </paper-listbox>
            </paper-dropdown-menu>
         </div>

         <!--Available Time dropdown field -->
         <div class="margin-btm">
          <paper-dropdown-menu label="Select Available Time" auto-validate required error-message="Please Select Available Time">
            <paper-listbox slot="dropdown-content" id="availableTime" attr-for-selected="value"  class="dropdown-content custom" horizontalAlign='left'>
                <paper-item value="10:00 AM">10:00 AM</paper-item>
                <paper-item value="11:00 AM">11:00 AM</paper-item>
                <paper-item value="12:00 AM">12:00 PM</paper-item>
                <paper-item value="13:00 AM">02:00 PM</paper-item>
                <paper-item value="14:00 AM">03:00 PM</paper-item>
                <paper-item value="15:00 AM">04:00 PM</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
         </div>

         <!--Appointment Fee dropdown field -->
         <div class="margin-btm">
          <paper-dropdown-menu label="Select Appointment Fee" auto-validate required error-message="Please Select Appointment Fee">
            <paper-listbox slot="dropdown-content" id="appointmentFee" attr-for-selected="value"  class="dropdown-content custom" horizontalAlign='left'>
              <paper-item value="400">Adult (Rs 400/-)</paper-item>
              <paper-item value="200">Child (Rs 200/-)</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
         </div>

         <!-- submit button  -->
         <div class="sub-btn margin-btm">
         <paper-button raised class="indigo"  on-tap="submitHandler" >Submit</paper-button>
         </div>
          </form>
        </iron-form>
  </div> 
</div>
 
<!-- left side box -->
<div  class="width" style="flex-grow: 4">
  <div class="right-box-flex">
    <div class="align-right-box">
      <h2>How are feeling today ?</h2>
      <p> Get unlimited doctor consultations and more much with pluse admin</p>
  </div>
  <div class="right-img">
      <iron-image class="consult-img" sizing="cover" preload src="../../images/consulting.png"></iron-image>
  </div>

  </div>
  <!--left side timing box -->
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

<!--paper-toast is used to show form submitting -->
<paper-toast id="toast"></paper-toast>

      `

  }
  static get properties() {
    return {
      // sourceData object is get form data from the iron-form
      sourceData:{
        type:Object
      },
      // waiting is used to show and hide spenner
      waiting: {
        type: Boolean,
        value:false
        
      },
    }
  };


  // form submitting function
  submitHandler() {
    this.$.formOne.submit();
  };

  // get the data from iron-form
  onResponse(e) {
    // set values from dropdown
    var serives = this.$.service.selected;
    var doctor = this.$.doctor.selected;
    var date = this.$.availableDate.selected;
    var time = this.$.availableTime.selected;
    var fee = this.$.appointmentFee.selected

    console.log('serives',serives);
    
    this.response = e.detail.response.form;
    console.log(' this.response', this.response);

  // set values to soucedata object from dropdown field and inpt field
    this.sourceData = {
      fee : fee,
      time:time,
      date:date,
      doctor:doctor,
      serviceData : serives,
      phone : this.response.phone,
      username: this.response.patientName
    }
    console.log('data', this.sourceData)

    // if sourcedata object value is available then store the data to localstorage 
    localStorage.setItem('appointmentData',JSON.stringify(this.sourceData));
    this.openToast();

    // waiting is true show the spinner
    this.waiting =true;

    // applay the css style for #spennerOpacity id
    this.$.spennerOpacity.style.opacity = '0.3';
    

    // settimeout funtion is used to show the toast message
    setTimeout(()=> {
      
    // when the form is submitted then route is redirect to booking-summary page and 1 scond dealy
      this.set('route.path', '/booking-summary');
    }, 1000);
    
    // after submit the form then reset the form 
    this.$.formOne.reset();
  }

   // open the toast message when submit is Success
   openToast() {
    this.$.toast.show({text: 'Successfully Submitted', duration: 3000})
  }
};

//registering into the webbrowser using cusomelement
window.customElements.define('appointment-comp', Appointment);