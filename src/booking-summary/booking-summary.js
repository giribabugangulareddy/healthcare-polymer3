import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';


class BookingSummary extends PolymerElement {
    static get template() {
      return html`
      <style>
      
      .center-width{
        width:40%;
        margin:0 auto;
      }
     .pull-right{
       float:right
     }
     .bg-clr{
      background: #f1f7fa;
      padding: 2em;
      font-family: 'Roboto';
     }
     .text-center{
       text-align:center;
     }
     paper-button{
      background: #337ab7;
      color:#fff;
      width: 100%;
      text-transform: inherit;
      margin-top: 1em;
    }
    @media (max-width: 1200px) {

        .center-width {
            width: 50%;
        }
    }
    @media (max-width: 992px) {
        .center-width {
            width: 60%;
        }
    }
    @media (max-width: 767px) {
        .center-width {
            width: 80%;
        }
    }
    @media (max-width: 600px) {
        .bg-clr{
            padding: 10px;
        }
        .center-width {
            width: 100%;
        }
    }
      </style>
      

      <div class="center-width">
      <div class="bg-clr" >
                <h2 class="text-center pad-15">Booking Summary</h2>

                <div >
                    <div class="col-sm-12 bg-clr">
                        <p><span>Doctor Name</span> <span class="pull-right">Giribabu</span></p>
                        <p><span>Patient Name</span> <span class="pull-right">Giribabu</span></p>
                        <p><span>Service </span> <span class="pull-right">Giribabu</span></p>
                        <p><span>Booking Date</span> <span class="pull-right">Giribabu</span></p>
                        <p><span>Booking Time</span> <span class="pull-right">Giribabu</span></p>
                        <p><span>Consulting fee </span> <span class="pull-right"> ₹200 /-</span></p>
                        <p><span>Booking fee(10%) </span> <span class="pull-right">₹20 /-</span></p>
                        <hr>
                        <p><span>Total fee</span> <span class="pull-right">Rs 220 /-</span></p>
                        
                        <paper-button  raised class="indigo">Make Payment</paper-button>
                    </div>
                </div>
            </div>
      </div>
      `
     
    }
    static get properties() {
      return {
        
       
      }

    }
}


window.customElements.define('booking-summary-comp', BookingSummary);