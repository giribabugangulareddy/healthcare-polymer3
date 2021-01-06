import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-spinner/paper-spinner.js';

class BookingSummary extends PolymerElement {
    static get template() {
      return html`
      <style>
      paper-spinner{
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
      }
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
      <paper-spinner active="[[waiting]]"></paper-spinner>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <div class="center-width">
      <div class="bg-clr" >
                <h2 class="text-center pad-15">Booking Summary</h2>

                <div >
                    <div class="col-sm-12 bg-clr">
                    <dom-repeat items="{{appointmentData}}">
                    <template>
                        <p><span>Doctor Name</span> <span class="pull-right">{{item.doctor}}</span></p>
                        <p><span>Patient Name</span> <span class="pull-right">{{item.username}}</span></p>
                        <p><span>Service </span> <span class="pull-right">{{item.serviceData}}</span></p>
                        <p><span>Booking Date</span> <span class="pull-right">{{item.date}}</span></p>
                        <p><span>Booking Time</span> <span class="pull-right">{{item.time}}</span></p>
                        <p><span>Consulting fee </span> <span class="pull-right"> ₹{{item.fee}} /-</span></p>
                        <p><span>Booking fee(10%) </span> <span class="pull-right">₹{{bookinFee}} /-</span></p>
                        <hr>
                        <p><span>Total fee</span> <span class="pull-right">Rs {{total}} /-</span></p>
                    </template>
                    </dom-repeat>
                        <paper-button  raised class="indigo" on-click="payment">Make Payment</paper-button>
                    </div>
                </div>
            </div>
      </div>



      `
     
    }
    constructor() {
        super();
        this._getappointData();
      }
    static get properties() {
      return {

         appointmentData:Array,
         total:Number,
         bookinFee:Number,
       
    //   True when waiting for the server to repond.
     
    waiting: {
        type: Boolean,
        value:true
        
      },
      };

    };

    timeout(){
        console.log('resr',this.waiting)
        setTimeout(()=> {
            this.waiting =false;
          }, 1000);
    }

    // get appointment data from localstorage
    _getappointData(){
        
       var data = JSON.parse(localStorage.getItem('appointmentData'));

       this.appointmentData =[];

       this.appointmentData.push(data);

    // calculating the bookingfee and total fee of customer
       this.appointmentData.forEach(element => {
           
           this.bookinFee = ((element.fee * 10) / 100);
           this.total = Number(this.bookinFee) + Number(element.fee);
           console.log(' this.bookinFee',  this.bookinFee, 'this.total', this.total)
       });

       this.timeout();
   
    };

    // redirect url to home
    payment(){
        
        this.set('route.path', '/home');
    };
}


window.customElements.define('booking-summary-comp', BookingSummary);