/**Import the Polymer library and html helper function
* Import the Polymer app-drawer
* Import the Polymer app-header-layout
* Import the Polymer app-header
* Import the Polymer iron-pages
* Import the Polymer app-route
* Import the Polymer paper-icon-item
* Import the Polymer paper-item
* Import the Polymer iron-icons
* Import the Polymer iron-selector 
* Import the Polymer paper-dialog
* Import the Polymer paper-toast
**/

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/paper-item/paper-icon-item.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-dialog/paper-dialog.js';
import'../appointment/appointment';
import '../styles/shared-styles.js';


/**
 * @customElement
 * @polymer
 */

 // Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

// Define the new element as a class
class MainApp extends PolymerElement {
  
  static get template() {
    return html`
    <style  include="shared-styles">
    
    a {
      text-decoration: none;
      font-size: inherit;
      color: inherit;
    }
    .confirm-btn{
      float:right;
      }
      .btn-appointmnet {
        font-size: 15px;
        background: #396cf0;
        color: #fff;
        text-transform: initial;
      }
      paper-icon-item{
        padding: 0;
      }
      .pad0{
        padding: 0;
      }
    /* small screen */
    @media (max-width: 992px) {
      paper-icon-item a: hover{
        background:#ccc;
      }
      app-drawer{
     
        position: absolute;
        z-index: 1;
      }
      :host {
        padding-top: 64px;
      }

    iron-image {
      width: 400px;
      height: 400px;
      background-color: lightgray;
    }
    .z-index{
      position: absolute;
      z-index: -1;
    }

    /* small screen */
    @media (max-width: 992px) {
      .res-font{
        font-size:19px;
      }
    }
  </style>

  
  <!-- app-location is used get rootpath --!>
  <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>

  <!-- app-route is used route --!>
  <app-route  route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}"></app-route>


  <!-- app-header-layout --!>

  <app-header-layout  style="z-index:1">
    <app-header reveals effects="waterfall" slot="header">
   

    <!-- app-toolbar --!>

      <app-toolbar class="toolbar">
      <paper-icon-button icon="menu" class="menu-btn"  on-click="_toggleDrawer"></paper-icon-button>
      <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
        <div class="tabs-left">
          <div>
              <a >
              <img src="../../images/logo.png">
              </a>
              <span class="header-menu btn-hover">
              <a name="home" href="[[rootPath]]home">Home</a>
              <a name="department" href="[[rootPath]]department">Department</a>
              <a >Doctors</a>
              <a >About</a>
              <a >Contact</a>
              </span>
          </div>
        </div>

        <div class="tabs-right">
          <div class="header-menu">
       
          <!-- header rightside menu-->
         <template is="dom-if" if="{{loginData}}">
         <span> <a  on-click="logoutOpenModal"> Logout</a></span>
         </template>
         <template is="dom-if" if="{{!loginData}}">
         <paper-button  raised class="btn-appointmnet"><a name="appointment" href="[[rootPath]]login">Appointment</a></paper-button>
         
          </template>
          </div>
        </div>
        </iron-selector>
      </app-toolbar>
     
    </app-header>
   
  </app-header-layout>





  <!-- app-drawer --!>
  
  <app-drawer opened="{{drawerOpened}}" swipe-open="" tabindex="0">
  <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
  <app-toolbar>
  <paper-icon-item  on-click="_toggleDrawer">
  <paper-item> <a  name="home" href="[[rootPath]]home">Home</a></paper-item>
  </app-toolbar>
 

  <app-toolbar>
  <paper-icon-item>
  <paper-item> <a>Department</a></paper-item>
  </app-toolbar>


  <app-toolbar>
  <paper-icon-item>
  <paper-item><a >Doctors</a></paper-item>
  </app-toolbar>

  <app-toolbar>
  <paper-icon-item>
  <paper-item > <a>About </a></paper-item>
  </app-toolbar>


  <app-toolbar>
  <paper-icon-item>
  <paper-item>Contact</paper-item>
  </app-toolbar>

  <app-toolbar>
  <template is="dom-if" if="{{loginData}}" >
  <paper-icon-item on-click="_toggleDrawer">
  <paper-item  on-click="logoutOpenModal">Logout</paper-item>
  </template>
  </app-toolbar>

  <app-toolbar>
  <template is="dom-if" if="{{!loginData}}">
  <paper-icon-item on-click="_toggleDrawer">
  <paper-item class="pad0"> 
  <paper-button  class="btn-appointmnet" raised >
  <a name="appointment" href="[[rootPath]]login">Appointment</a>
  </paper-button>
  </paper-item>
  </template>
  </app-toolbar>

  </iron-selector>
</app-drawer>

<!-- toast message UI-->
<paper-toast id="toast"></paper-toast>


<!-- logout confirm popup modal -->
<paper-dialog modal  id="dialog">
  <h2 class="res-font">Are you sure want to Logout ?</h2>    
  <div id="dialog-buttons">
    <paper-button dialog-dismiss on-tap="_modalCancelled">Cancel</paper-button>
    <paper-button dialog-confirm autofocus class="confirm-btn" on-tap="_modalconfirmed">Yes</paper-button>
  </div>
</paper-dialog> 



<!-- iron-pages: Basically page switcher to load required component on demand In app-route.-->
<!-- selected: Data binding helps to get changed page value -->
<!-- attr-for-selected: It reads value of name attr defined in each component & matches 
      with selected value and triggers page switch -->

<iron-pages role="main" selected="[[page]]" attr-for-selected="name"  role="main">
      <home-comp name="home" class="z-index"></home-comp>
      <appointment-comp name="appointment"></appointment-comp>
      <admin-login  name="login" ></admin-login>
      <departments-comp name="department"></departments-comp>
      <booking-summary-comp name="booking-summary"></booking-summary-comp>
      <dashboaed-comp name="dashboard"></dashboaed-comp>
      <payment-comp name="payment"></payment-comp>
</iron-pages>


    `;
  };

  
  
  static get properties() {
    return{
      // define a property ..
        page:{
            type:String,

            // reflectToAttribute says that the attribute on the host node will change when the value changes.
            reflectToAttribute :true,
            observer:'_pageChanged',
            /**
           * specify an observer to be invoked when the property changes on switch case 
           * this observer will onserve the page is availabe or not in switch case...
            */ 
        },

        routeData: Object,
        subroute: Object,

        // drawerOpened is used to show and hide the drawer
        drawerOpened:{
          type: false,
        },

        // to get login data from localstorage
        loginData:{
          type:String
        }
    }
};

/* observer: Its a simple observer (basically a watch which holds current value & old value) 
     that triggers whenever data changed in page property. 
     We read the observer and calls a function to grab its earlier */

static get observers(){
    console.log("test observer");
  return ['_routerChanged(routeData.page)'];
};



_routerChanged(page){

      /** Show the corresponding page according to the route.
     
      * If no page was found in the route data, page will be an empty string.
      * Show 'home' in that case.
      */

    console.log('page', page)
    this.loginData = localStorage.getItem('credentials');
    if (!page) {
      this.page = 'home';
    } else if (['home','login', 'appointment','department','booking-summary','dashboard','payment'].indexOf(page) !== -1) {
      this.page = page;
       
    }

};



_pageChanged(page){

  // import pages component on demand
    

    console.log('page',page)
    switch(page){

     
        case 'home' : 
            import('../home/home.js');
            break;
        case 'department':
            import('../departments/departments.js');
             break;
        case 'appointment':
            import('../appointment/appointment.js');
             break;
        case 'dashboard':
            import('../dashboard/dashboard.js');
             break;
        case 'login' : 
            import('../admin-login/admin-login.js');
            break;
        case 'booking-summary' : 
            import('../booking-summary/booking-summary.js');
            break;
        case 'payment' : 
            import('../payment/payment.js');
            break;
       
        default : this.page='home';
        
    }
}; 


  _toggleDrawer() {
    // when we view mobile on screen drawer open and close

    console.log( ' this.drawerOpened',this.drawerOpened)
    this.drawerOpened = !this.drawerOpened;
  };

  
  logoutOpenModal() {
    // when we logout button open the confirm modal 

    this.$.dialog.open();
  };


  _modalconfirmed(){
    // when we confirm the logout funtion
 
    this.clearStorege();
 
   //  location reload used to reload the page and when page sucessfully logout
    location.reload();
    
  };
  

 clearStorege(){
  // clear the local storage data when user logout
  this.openToast();
  localStorage.clear();

  // To based to show and hide the appointment button and logout
  // 
  this.loginData = !this.loginData;

  // once localstorage clear route is redirect to home
  this.set('route.path', '/home');
};



openToast() {
  // when do the logout we have to show toast messages

  this.$.toast.show({text: 'Successfully Logout', duration: 3000});
};


};


//registering into the webbrowser using cusomelement
window.customElements.define('main-app', MainApp);
