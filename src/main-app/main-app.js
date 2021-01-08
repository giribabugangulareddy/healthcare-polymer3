import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
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
import'../admin-login/admin-login';


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

class MainApp extends PolymerElement {
  
  static get template() {
    return html`
    <style>
    a {
      text-decoration: none;
      font-size: inherit;
      color: inherit;
    }
    .toolbar {
      display: flex;
      justify-content: space-between;
      width:80%;
      margin:0 auto;
    }
    app-header{
      box-shadow: 0px 1px 10px #999;
      left:0 !important;
      right:0 !important;
      background: #fff;
    }
    .btn-hover a:hover,  .btn-hover a:active
    {
      background:#cccccc47;
      border-radius:5px;
    }
    .tabs-right span a:hover, .tabs-right span a:active{
      background:#cccccc47;
      border-radius:5px;
    }
    .tabs-right span a{
    padding:15px;
    font-family: sans-serif;
    font-size: 15px;
    cursor: pointer;
     
    }
    .tabs-left a{
      padding:15px;
      font-family: sans-serif;
      font-size: 15px;
      vertical-align: middle;
    }
    .btn,btn:hover,.btn:active{
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
      cursor: pointer;
      background-image: none;
      border: 1px solid transparent;
      padding: 8px 12px;
      font-size: 14px;
      line-height: 2;
      border-radius: 4px;
      line-height: 1.42857143;
      display: inline-block;
      margin-bottom: 0;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
    }
    .confirm-btn{
      float:right;
  }
    app-drawer {
      --app-drawer-content-container: {
        background-color: #B0BEC5;
        --app-drawer-content-container_-_background-color:#fff;
      }
    }
    
    .drawer-contents {
      height: 100%;
      overflow-y: auto;
    }

    .menu-btn {
      display: none;
    }
    #scrim.visible{
      opacity: 0 !important;
    }
    iron-selector{
      display: contents;
    }
   
    @media (max-width: 1200px) {
      .tabs-left a {
        padding: 7px;
      }
      
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

      .menu-btn {
        display: block;
      }
      .header-menu{
        display:none;
      }
      .toolbar {
        display: inline-flex;
        width:100%;
        justify-content: flex-start;
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
              <a class="">
              <img src="../../images/logo.png">
              </a>
              <span class="header-menu btn-hover">
              <a name="home" href="[[rootPath]]home">Home</a>
              <a name="about" href="[[rootPath]]about">About</a>
              <a name="department" href="[[rootPath]]department">Department</a>
              <a href="">Doctors</a>
              <a href="">Contact</a>
              </span>
          </div>
        </div>

        <div class="tabs-right">
          <div class="header-menu">
         <!-- <span> <a  name="login" href="[[rootPath]]login">Admin Login</a></span> --!>

         <template is="dom-if" if="{{loginData}}">
         <span> <a  on-click="openModal"> Logout</a></span>
         </template>
         <template is="dom-if" if="{{!loginData}}">
          <button class="btn"> <a name="appointment" href="[[rootPath]]login">Appointment</a></button>
          </template>
          </div>
        </div>
        </iron-selector>
      </app-toolbar>
     
    </app-header>
   
  </app-header-layout>


  <!-- toast message UI-->
  <paper-toast id="toast"></paper-toast>


  <!-- logout confirm popup modal -->
<paper-dialog modal backdrdop id="dialog">
    <h2 class="res-font">Are you sure want to Logout ?</h2>    
    <div id="dialog-buttons">
      <paper-button dialog-dismiss on-tap="_modalCancelled">Cancel</paper-button>
      <paper-button dialog-confirm autofocus class="confirm-btn" on-tap="_modalconfirmed">Yes</paper-button>
    </div>
</paper-dialog> 


  <!-- app-drawer --!>
  
  <app-drawer opened="{{drawerOpened}}" swipe-open="" tabindex="0">
  <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation">
  <app-toolbar>
  <paper-icon-item  on-click="_toggleDrawer">
  <paper-item> <a  name="home" href="[[rootPath]]home">Home</a></paper-item>
  </app-toolbar>
 

  <app-toolbar>
  <paper-icon-item on-click="_toggleDrawer">
  <paper-item > <a name="about" href="[[rootPath]]about" >About </a></paper-item>
  </app-toolbar>


  <app-toolbar>
  <paper-icon-item  on-click="_toggleDrawer">
  <paper-item> <a>Department</a></paper-item>
  </app-toolbar>


  <app-toolbar>
  <paper-icon-item on-click="_toggleDrawer">
  <paper-item><a >Doctors</a></paper-item>
  </app-toolbar>


  <app-toolbar>
  <paper-icon-item>
  <paper-item>Contact</paper-item>
  </app-toolbar>

  <app-toolbar>
  <template is="dom-if" if="{{loginData}}" >
  <paper-icon-item on-click="_toggleDrawer">
  <paper-item  on-click="openModal">Logout</paper-item>
  </template>
  </app-toolbar>

  <app-toolbar>
  <template is="dom-if" if="{{!loginData}}">
  <paper-icon-item on-click="_toggleDrawer">
  <paper-item> <button class="btn"> <a name="login" href="[[rootPath]]login">Appointment</a></button></paper-item>
  </template>
  </app-toolbar>

  </iron-selector>
</app-drawer>

<!-- page routing or navigation --!>

<iron-pages role="main" selected="[[page]]" attr-for-selected="name"  role="main">
<home-comp name="home" class="z-index"></home-comp>
<about-comp name="about"  route="[[subroute]]"></about-comp>
<contact-comp name="contact"></contact-comp>
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
        page:{
            type:String,
            reflectToAttribute :true,
            observer:'_pageChanged'
        },
        routeData: Object,
        subroute: Object,

        drawerOpened:{
          type: false,
        },
        loginData:{
          type:String
        }
    }
};

// if any values changeed observer  is called and it is  callback function
static get observers(){
    console.log("test observer");
  return ['_routerChanged(routeData.page)'];
};



_routerChanged(page){

      // Show the corresponding page according to the route.
     // 
     // If no page was found in the route data, page will be an empty string.
     // Show 'home' in that case.


    console.log('page', page)
    this.loginData = localStorage.getItem('credentials');
    if (!page) {
      this.page = 'home';
    } else if (['home', 'about', 'login', 'appointment','department','booking-summary','dashboard','payment'].indexOf(page) !== -1) {
      this.page = page;

      
       
    } else{
      this.page = 'invalid-page';
    }

};



_pageChanged(page){

   // Import the page component on demand.
    //
    // Note: `polymer build` doesn't like string concatenation in the import
    // statement, so break it up.

    console.log('page',page)
    switch(page){

     
        case 'home' : 
            import('../home/home.js');
            break;
        case 'about':
            import('../about/about.js');
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

// when we view mobile screen drawer open   and close
  _toggleDrawer() {
    console.log( ' this.drawerOpened',this.drawerOpened)
    this.drawerOpened = !this.drawerOpened;
  };

  // clear the local storage data
  clearStorege(){
    this. openToast();
    console.log('fasfasd')
    localStorage.clear();
    this.loginData = !this.loginData;
    this.set('route.path', '/home');
  };

  
  openToast() {
    // toast messages funtion
    this.$.toast.show({text: 'Successfully Logout', duration: 3000})
  };

  
  openModal() {
    // when we logout open the confirm modal 

    this.$.dialog.open();
  };

  
 _modalconfirmed(){
   // when we confirm the logout funtion
   this. clearStorege();
   console.log('Confirmed', this.loginData);
   
 };
};


window.customElements.define('main-app', MainApp);
