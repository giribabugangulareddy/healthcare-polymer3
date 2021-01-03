import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';



class AdminLogin extends PolymerElement {
  static get properties() {
    return {
        
      selected: {
            type: String,
            value: ''
        }
    }
  }

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




     <div class="bg-color">
        <div class="center-box">
        <div class="login-frem">
        <h1>Admin Login </h1>
          <iron-form id="formOne" on-iron-form-response="onResponse">
              <form method="post" action="https://httpbin.org/post" is="iron-form">
              
                <paper-input name="email" placeholder="email"></paper-input>

                <paper-input type="password" name="password" placeholder="password"></paper-input>

                <div class="btn-align">
                <paper-button  raised class=" indigo" on-tap="submitHandler">Submit</paper-button>
                </div>
              </form>
          </iron-form>
        </div>
        </div>
       
     </div>
    
      
      
      `

    }




    submitHandler() {
      this.$.formOne.submit();
    }
    onResponse(e) {
      this.response = JSON.stringify(e.detail.response.form, null, 2);
      
    }
}



window.customElements.define('admin-login', AdminLogin);