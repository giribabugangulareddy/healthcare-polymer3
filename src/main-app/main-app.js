import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
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
import '@polymer/iron-image/iron-image.js';

import '../home/home.js';
import'../about/about.js';
import'../departments/departments.js';
import'../appointment/appointment';
import'../admin-login/admin-login';

/**
 * @customElement
 * @polymer
 */
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
   
    @media (max-width: 1200px) {
      .tabs-left a {
        padding: 7px;
      }
      
    }
   

    /* small screen */
    @media (max-width: 992px) {
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
  </style>

  <app-location route="{{route}}"></app-location>

  <app-route  route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>


  <!-- app-header-layout --!>

  <app-header-layout>
    <app-header reveals effects="waterfall" slot="header">
   

    <!-- app-toolbar --!>

      <app-toolbar class="toolbar">
      <paper-icon-button icon="menu" class="menu-btn"  on-click="_toggleDrawer"></paper-icon-button>

        <div class="tabs-left">
          <div>
              <a class="">
              <img src="../../images/logo.png">
              </a>
              <span class="header-menu btn-hover">
              <a href="home">Home</a>
              <a href="about">About</a>
              <a href="department">Department</a>
              <a href="">Doctors</a>
              <a href="">Contact</a>
              </span>
          </div>
        </div>

        <div class="tabs-right">
          <div class="header-menu">
          <span> <a  href="login">Admin Login</a></span>
          <button class="btn"> <a href="appointment">Appointment</a></button>
          </div>
        </div>

      </app-toolbar>
     
    </app-header>
   
  </app-header-layout>


  <!-- app-drawer --!>
  
  <app-drawer opened="{{drawerOpened}}" swipe-open="" tabindex="0">

  <app-toolbar>
  <paper-icon-item  on-click="_toggleDrawer">
  <paper-item> <a  href="home">Home</a></paper-item>
  </app-toolbar>
 

  <app-toolbar>
  <paper-icon-item on-click="_toggleDrawer">
  <paper-item > <a href="about" >About </a></paper-item>
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

  
</app-drawer>

<!-- page routing or navigation --!>

<iron-pages role="main" selected="[[page]]" attr-for-selected="name"  fallback-selection="404">
<home-comp name="home" class="z-index"></home-comp>
<about-comp name="about"  route="[[subroute]]"></about-comp>
<contact-comp name="contact"></contact-comp>
<appointment-comp name="appointment"></appointment-comp>
<admin-login  name="login" ></admin-login>



<departments-comp></departments-comp>
    `;
  }
  static get properties() {
    return{
        page:{
            type:String,
            reflectToAttribute :true,
            observer:'_pageChanged'
        },
        drawerOpened:{
          type: false,
        }
    }
};

static get observers(){
    console.log("test observer");
  return ['_routerChanged(routeData.page)'];
}

_routerChanged(page){
    console.log('page', page)
    this.page = page || 'home';

}

_pageChanged(currentPage, oldPage){
    console.log('currentPage, oldPage', currentPage, oldPage)
    switch(currentPage){

     
        case 'home' : 
            import('../home/home').then( 
              ()=>{this.drawerOpened; console.log('this.drawerOpened',this.drawerOpened)}
            )

            break;
        case 'about':
            import('../about/about').then( )
            break;
        case 'appointment':
            import('../appointment/appointment').then( )
             break;
        case 'login' : 
            import('../admin-login/admin-login').then()
            break;
        default : this.page='home';
        
    }
}

  _toggleDrawer() {
    console.log( ' this.drawerOpened',this.drawerOpened)
    this.drawerOpened = !this.drawerOpened;
  }
}

window.customElements.define('main-app', MainApp);
