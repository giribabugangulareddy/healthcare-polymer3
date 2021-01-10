/**Import the Polymer library and html helper function
* Import the Polymer paper-button
* Import the Polymer paper-spinner
*/

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '../styles/shared-styles.js';
class BookingSummary extends PolymerElement {
    static get template() {
      return html`
      <style include="shared-styles">
      paper-spinner{
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
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
    #spennerOpacity{
      opacity:1;
    }
   

</style>




<paper-spinner active="[[waiting]]"></paper-spinner>
<app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

  <div id="spennerOpacity">
    <div class="center-width">
     <div class="bg-clr" >
               <h2 class="text-center pad-15">Booking Summary</h2>

              <!-- booking summary details with using dom-repate -->
               <div>
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
  </div>


`;
     
};


    constructor() {
        super();
        // get appointment data from localstorage when during page load
        this._getappointData();
      };


    static get properties() {
      return {

         appointmentData:Array,
         total:Number,
         bookinFee:Number,
       
    //   True when waiting for the server to repond.
     
    waiting: {
        type: Boolean,
        value:false
        
      }
      };

    };



    
    _getappointData(){

        // get appointment data from localstorage
       var data = JSON.parse(localStorage.getItem('appointmentData'));

       this.appointmentData =[];

       this.appointmentData.push(data);

    /**calculating the booking charges(10%)  from the base bookingfee
     * itareate the appointment array using foreach menthod and
     * pick bookingCharges value from appointment array loop and 
     * separate 10% of on booking Charges (10%) and add to the total fee( bookingfee + bookingcharges 10%)
     * */ 

       this.appointmentData.forEach(element => {
           
           this.bookinFee = ((element.fee * 10) / 100);

          //  adding booking fee + bookingcharges fee
          //  and here we get data is type string values so that we used Number type to calculating
           this.total = Number(this.bookinFee) + Number(element.fee);
           console.log(' this.bookinFee',  this.bookinFee, 'this.total', this.total)
       });

       
   
    };

    // payment details submit funtion
    payment(){
      // wating true is to add spenner 
      this.waiting =true;

      // spnner opacity added
      this.$.spennerOpacity.style.opacity = '0.3'
      
      // delay for 1second for showing spnner and toast message
      setTimeout(()=> {
        
        // url redirect to payment component
        this.set('route.path', '/payment');
      }, 1000);
        
    };
};


//registering into the webbrowser using cusomelement
window.customElements.define('booking-summary-comp', BookingSummary);