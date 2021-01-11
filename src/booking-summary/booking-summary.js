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
                       <p><span>Booking fee(10%) </span> <span class="pull-right">₹{{bookingFeeCharges}} /-</span></p>
                       <hr>
                       <p><span>Total fee</span> <span class="pull-right">₹{{total}} /-</span></p>
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

      // something that requires access to the shadow tree
        super();

        // get appointment data from localstorage when during page load
        this._getappointData();
      };


    static get properties() {
      return {

        // get appointmentData array
         appointmentData:Array,

        //  to get total value 
         total:Number,

        //  to get the booking Fee value
         bookingFeeCharges:Number,
       
      // when waiting property is True for showing the spinner and it is defulat false
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

      //  appointment data  is pushed to appointmentData array
       this.appointmentData.push(data);

    /**calculating the bookingFeecharges(10%)  from the base bookingfee
     * itareate the appointment array using foreach menthod and
     * pick bookingCharges value from appointment array loop and 
     * separate the 10% of on bookingfee Charges (10%) and add to the total fee( base bookingfee + bookingcharges 10%)
     * */ 

       this.appointmentData.forEach(element => {
           
           this.bookingFeeCharges = ((element.fee * 10) / 100);

          //  adding base booking fee + bookingfeecharges 
          //  and here we get data  type is string values so that we used Number type to calculating
           this.total = Number(this.bookingFeeCharges) + Number(element.fee);
           console.log(' this.bookingFeeCharges',  this.bookingFeeCharges, 'this.total', this.total)
       });

       
   
    };

    // payment details submit funtion
    payment(){
      // wating true is to show the spenner 
      this.waiting =true;

      // spnner opacity added
      this.$.spennerOpacity.style.opacity = '0.3'
      
      // delay for 1 second for showing spnner and toast message
      setTimeout(()=> {
        
        // url redirect to payment component
        this.set('route.path', '/payment');
      }, 1000);
        
    };
};


//registering into the webbrowser using cusomelement
window.customElements.define('booking-summary-comp', BookingSummary);