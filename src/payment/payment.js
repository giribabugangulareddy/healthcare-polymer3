/**Import the Polymer library and html helper function
* Import the Polymer iron-icons
* Import the Polymer paper-card
* Import the Polymer iron-image
* Import the Polymer paper-dropdown-menu
* Import the Polymer iron-form
* Import the shared-styles
* Import the Polymer paper-toast
**/


import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-toast/paper-toast.js';
import '../styles/shared-styles.js';


class Payment extends PolymerElement {
    static get template() {

      return html`

      <style include="shared-styles">
      
      .login-frem{
        width: 30%;
        margin: 0 auto;
        padding: 30px;
        
    };
    paper-card{
        width: 100%;
        padding: 30px;
    }
    .indigo{
        width: 100%;
        background: #396cf0;
        color: #fff;
    }
    
    .btn-align{
        margin-top:30px;
    }
    .login-frem h1{
        font-size:24px;
        font-family: 'Roboto';
    }
    .flex-card{
      display: flex;
      justify-content: space-between;
    }
    .custom {
      width: 120px;
      height:200px;

    }
    paper-dropdown-menu {
      --paper-dropdown-menu: {
        left:0 !important;
        width:100% !important;
      } 
    }  
    paper-dialog{
      text-align: center;
      padding: 40px;
      color: #636363;
      border-radius:8px;
    }
    paper-dialog h2{
      font-size: 30px;
      margin-top: 25px;
    }
    paper-dialog p{
      font-size: 16px;
      line-height: 1.5;
    }
    .confirm-btn{
      width: 100%;
      background: #82ce34;
      color: #fff;
      font-size: 15px;
      margin-top: 19px;
    }
    .icon-box{
      position: absolute;
      margin: 0 auto;
      left: 0;
      right: 0;
      top: -58px;
      width: 100px;
      height: 48px;
      border-radius: 50%;
      z-index: 9;
    }
    .icon-box img{
      position: relative;
      top: 3px;
    }
      @media (max-width: 1200px) {

        .login-frem {
          width: 40%;
        }
      }
      @media (max-width: 992px) {
        
        .login-frem {
          width: 55%;
        }
      }
      @media (max-width: 600px) {
        
        .login-frem {
          width: 65%;
        }
      }
      
      @media (max-width: 480px) {
        .login-frem {
          width: 100%;
          padding: 0;
        }
        .flex-card{
          display: block;
        }
        .icon-box img {
          width: 80px;
          top: 14px;
        }
        paper-dialog{
          padding: 20px;
        }
        paper-dialog h2{
          margin-top: 40px;
          font-size: 25px;
        }
      };
</style>

      <!-- app-location is used get rootpath --!>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>   
      <div class="login-frem">
      <paper-card>
      
        <h1>Payments </h1>
            <div class="flex-card">
            <p>Pay with credit card</p>
            <iron-image class="image"  preload src="../../images/visa-logo-small.png"></iron-image>
            </div>
          <iron-form id="formOne" on-iron-form-response="onResponse">
              <form method="post" action="https://httpbin.org/post" is="iron-form">
              
                <paper-input name="cardholder" placeholder="Card Holder Name"  auto-validate pattern="[a-zA-Z]*"    error-message="Enter Card Holder's Name" required ></paper-input>
                <paper-input name="cardNumber" placeholder="Card Number"  auto-validate pattern="[0-9]*" maxlength="16" minlength="16"  error-message="Enter Card Number & should be 16 digits " required ></paper-input>
                
                <div class="flex-box">
                <paper-dropdown-menu label="Expiry Month" class="pad10" auto-validate required error-message="Expiry Month">
                    <paper-listbox slot="dropdown-content" id="availableDate" attr-for-selected="value"   class="dropdown-content custom" horizontalAlign='left'>
                        <paper-item value="1">Jan </paper-item>
                        <paper-item value="2">Feb </paper-item>
                        <paper-item value="3 ">Mar</paper-item>
                        <paper-item value="4">Apr</paper-item>
                        <paper-item value="5">May</paper-item>
                        <paper-item value="6">Jun</paper-item>
                        <paper-item value="7">Jul </paper-item>
                        <paper-item value="8">Aug </paper-item>
                        <paper-item value="9 ">Sep</paper-item>
                        <paper-item value="10">Oct</paper-item>
                        <paper-item value="11">Nov</paper-item>
                        <paper-item value="12">Dec</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>
                <paper-dropdown-menu label="Expiry Year" class="pad10" auto-validate required error-message="Expiry Year">
                    <paper-listbox slot="dropdown-content" id="availableDate" attr-for-selected="value"   class="dropdown-content custom" horizontalAlign='left'>
                        <paper-item value="1">2021 </paper-item>
                        <paper-item value="2">2022 </paper-item>
                        <paper-item value="3">2023</paper-item>
                        <paper-item value="4">2024</paper-item>
                        <paper-item value="5">2025</paper-item>
                        <paper-item value="6">2026</paper-item>
                        <paper-item value="7">2027 </paper-item>
                        <paper-item value="8">2028 </paper-item>
                        <paper-item value="9">2029</paper-item>
                        <paper-item value="10">2030</paper-item>
                        
                    </paper-listbox>
                </paper-dropdown-menu>
                <paper-input name="cardCvv"  placeholder="CVV"  auto-validate pattern="[0-9]*" maxlength="4" minlength="3"  error-message="CVV" required ></paper-input>
                </div>

                <div class="btn-align">
                <paper-button  raised class="indigo" on-tap="submitHandler">Pay Now</paper-button>
                </div>
              </form>
          </iron-form>
       
        </paper-card>
        </div>

        <paper-toast id="toast"></paper-toast>

        <!-- success confirm popup modal -->
        <paper-dialog modal backdrdop id="dialog">
        <div class="icon-box">
					<img src="../../images/oie_png.png">
				</div>	
            <h2 class="res-font">Awesome!</h2>    
            <p>Your booking has been confirmed. </br> Check your email for details.</p>
            <div id="dialog-buttons">
              
              <paper-button dialog-confirm autofocus class="confirm-btn" on-tap="_modalconfirmed">OK</paper-button>
            </div>
        </paper-dialog> 
      `
    }
    static get properties() {
      return {
        // response is get form data from the iron-form
        response:{
          type:String
        },
      }
    };    

    submitHandler() {

      // form submitting function
      this.$.formOne.submit();
    }

    
  onResponse(e) {

    // get the data from iron-form in e.details.reposnse.form
    this.response = e.detail.response.form;
    console.log(' this.response', this.response);
    this.openToast();
    this.openModal();
    
   
   
  }

   // open the toast message when submit Successfully
  openToast() {
    this.$.toast.show({text: ' Payment Successful', duration: 3000})
  }


  openModal() {

    // when we click on the payment button then open the success message modal 
    this.$.dialog.open();
  };

  _modalconfirmed(){

      //when we  click on the OK button in modal
      //and its url redirect to home
      // here settimeout funtion is used to delay 1 second for show the toast message
     
    setTimeout(()=> {
      
      this.set('route.path', '/home');
    }, 1000);
    
    // after redirect url then reset the form
    this.$.formOne.reset();
  };
}

//registering into the webbrowser using cusomelement
window.customElements.define('payment-comp', Payment);