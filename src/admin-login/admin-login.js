// Import the Polymer library and html helper function
// Import the Polymer paper-toast
// Import the Polymer iron-input
// Import the Polymer paper-button
// Import the Polymer iron-input
// Import the Polymer iron-form
// Import the Polymer paper-checkbox
// 

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '../styles/shared-styles.js';


class AdminLogin extends PolymerElement {

    static get template() {
      return html`
      <style include="shared-styles">
      
      .login-frem{
        width:25%;
        margin:0 auto;
        padding: 30px;
        background: #f5f2f2 ;
        
    };
    .login-frem h1{
        font-size:24px;
        font-family: 'Roboto';
        text-align:center;
    };
    .btn-align{
      padding: 12px 0;
      text-align: center;
    };
    .bg-color{
      background-color:#17a2b8;
     
    }
    .center-box{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 92vh;
    }
    paper-button{
      background: #337ab7;
      color:#fff;
    }
    .errmsg{
      text-align:right;
      color:red;
      font-family: 'Roboto';
      margin: 4px;
    }

    paper-checkbox{
      margin-top:15px;
    }
    
    @media (max-width: 1200px) {

      .login-frem {
        width: 40%;
      }
    }
    @media (max-width: 992px) {
      
      .login-frem {
        width: 50%;
      }
    }
    @media (max-width: 480px) {
      .login-frem {
        width: 60%;
      }
    }
      </style>


<!-- app-location is an element that provides synchronization between the browser location bar and the state of an app -->

<app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
<div class="bg-color">
  <div class="center-box">
      <div class="login-frem">
        <h1>Login </h1>

          <!-- iron-form is used get form value data  on-iron-form-response -->
          <!-- paper-input add to validtions purpose auto-validate and pattern ,error-message -->

          <iron-form id="formOne" on-iron-form-response="onResponse">
              <form method="post" action="https://httpbin.org/post" is="iron-form">
              
                <paper-input name="email" placeholder="Email"  auto-validate pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  error-message="Please enter email" required ></paper-input>

                <paper-input type="password" name="password" placeholder="Password" minlength="4" auto-validate error-message="Please enter password" required></paper-input>
                <paper-checkbox name="admin" value=checked>If your an admin</paper-checkbox>
                <div class="errmsg">
                <small>{{errorMsg}}</small>
                </div>
                <div class="btn-align">
                <paper-button  raised class=" indigo" on-tap="submitHandler">Submit</paper-button>
                </div>
              </form>
          </iron-form>
      </div>
  </div>      

</div>

<!--paper-toast  is used to when submit the form and  show toast messages --> 
<paper-toast id="toast"></paper-toast>
      
  `;

    };
    static get properties() {
      return {
        // response is get the form data from iron-onResponse
        response: {
              type: String,
          },
         

      };
    };



   
    submitHandler() {
       // form submit used to formone is from id
      this.$.formOne.submit();
    };

   
    onResponse(e) {
       // get the form data from irom-form response
      
      console.log('e.detail.response.form', e.detail.response.form);
      this.response = e.detail.response.form;


      // here we form value comfired to static values
      if(this.response.email != 'admin@gmail.com'){
        this.errorMsg = "Invalid credentials";

      }else if(this.response.password != 'admin'){
        this.errorMsg = "Invalid credentials";

      }else{
      //  if form valid is we have empty the errorMsg property
        this.errorMsg="";

        // if form valid the form data are stored to localstorage
        console.log(' this.response',  this.response);
        localStorage.setItem('credentials',JSON.stringify(this.response))

        // then show toast messages and reset the form
        this.openToast();
        this.$.formOne.reset();
        

        // separate routes based on admin checkbox
        
        if(!this.response.admin){

        // settimeout funtion is used to show the toast message for 1 second dealy
        // if user login route is redirect to appointment page
        setTimeout(()=> {
          this.set('route.path', '/appointment');
        }, 1000);

        }else{
        // if user admin route is redirect to dashboard page
          setTimeout(()=> {
            this.set('route.path', '/dashboard');
          }, 1000);
        }
        
      };
      
    };

    // open the toast message when login is Successfully
    openToast() {
      this.$.toast.show({text: 'Successfully Login', duration: 3000})
    }
}


//registering into the webbrowser using cusomelement
window.customElements.define('admin-login', AdminLogin);