import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';




class AdminLogin extends PolymerElement {
  

    static get template() {
      return html`
      <style>
      
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



      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
     <div class="bg-color">
        <div class="center-box">
        <div class="login-frem">
        <h1>User Login </h1>
          <iron-form id="formOne" on-iron-form-response="onResponse">
              <form method="post" action="https://httpbin.org/post" is="iron-form">
              
                <paper-input name="email" placeholder="Email"  auto-validate pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  error-message="{{errorMessage}} email" required ></paper-input>

                <paper-input type="password" name="password" placeholder="Password" minlength="4" auto-validate error-message="{{errorMessage}} password" required></paper-input>
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
      
       <h1>{{myname}}</h1>
     </div>
     <paper-toast id="toast"></paper-toast>
      
      
      `

    };
    static get properties() {
      return {
          
        response: {
              type: String,
             observer:'validators'
          },
          errorMessage:{
            type: String,
            value:"required",
            notify: true,
          },

          myname:{
            type:String,
            notify:true,
            
          }
      };
    };



    // form submit funtion
    submitHandler() {
      
      this.$.formOne.submit();
    };

    // get the form data from irom-form response
    onResponse(e) {
      
      
      console.log('e.detail.response.form', e.detail.response.form);
      this.response = e.detail.response.form;

      // var data = localStorage.getItem('credentials');
      //   console.log(' this.data',JSON.parse( data));

      if(this.response.email != 'admin@gmail.com'){
        this.errorMsg = "Invalid credentials";

      }else if(this.response.password != 'admin'){
        this.errorMsg = "Invalid credentials";

      }else{
       
        this.errorMsg="";

        console.log(' this.response',  this.response);
        localStorage.setItem('credentials',JSON.stringify(this.response))

        this.openToast();
        this.$.formOne.reset();
        
        // settimeout funtion is used to show the toast message
        setTimeout(()=> {
          this.set('route.path', '/appointment');
        }, 1000);
        
      };
      
    }

    // open the toast message when login sucessfully
    openToast() {
      this.$.toast.show({text: 'Sucessfully Login', duration: 3000})
    }
}



window.customElements.define('admin-login', AdminLogin);