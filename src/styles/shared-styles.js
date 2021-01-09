
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">


<template>
<style>
.btn,.btn:hover,.btn:active{
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



.consult-img{
  width: 150px;
  height: 70px;
}
.right-box-flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #396cf0;
}
.right-img{
  padding:20px
}
.align-right-box{
  text-align: left;
  padding: 15px;
  font-family: 'Roboto';
}
.align-right-box p{
  font-size: 14px;
}
.flex-message{
  border: 1px solid #ccc;
  text-align: left;
  display: flex;
  flex-direction: row;
  padding: 20px;
  width: 60%;
  background: #fff;
  margin-top: 30px;
}
.time-box{
  padding: 15px;
  border-right: 1px solid #ccc;
  font-family: 'Roboto';
  font-size: 15px;
  color: #000;
  text-align: center;
}
.timeings{
  padding: 12px;
  font-size: 13px;
  font-family: 'Roboto';
  color: #396cf0;
  line-height: 2;
}
.icon-color{
  color: #396cf0;
  margin-bottom: 7px;
}
.left-box{
  border:1px solid #ccc;
  text-align: left;
  padding: 30px;
}
.title{
  text-align:center;
  color:#000;
  font-size: 22px;
  font-family: 'Roboto';
}
.sub-btn{
  padding: 15px 0;
}
.margin-btm{
  margin-bottom: 5px;
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


 .card-view {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
}

.caption{
  text-align: center;
  font-size: 22px;
  font-family: sans-serif;
  margin: 10px;
}
.square {
  width: auto;
  height: 250px;
  padding: 10px;
  display: inline-block;
  margin-bottom: 50px;
}


.flex-box{
  display:flex;
}
.pad10{
  padding: 0 30px 0 0;
}

@media (max-width: 1200px) {
  .tabs-left a {
    padding: 7px;
  }
  .right-box-flex {
    flex-direction: column;
  }
  .timeings{
    font-size: 12px;
  }
  .center-width {
    width: 50%;
}
};

/* small screen */
@media (max-width: 992px) {
  paper-icon-item a: hover{
    background:#ccc;
  }
  app-drawer{
 
    position: absolute;
    z-index: 1;
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
.right-box-flex {
  flex-direction: row;
}
.flex-message {
  width: 94%;
  padding: 14px;
}
.center-width {
  width: 60%;
}
};


@media (max-width: 767px) {
  .right-box-flex {
    flex-direction: column;
  }
  .center-width {
    width: 80%;
}
};
@media (max-width: 600px) {
  .bg-clr{
      padding: 10px;
  }
  .center-width {
      width: 100%;
  }
};
@media (max-width: 480px){
  .flex-message {
    width: 92%;
}
.align-right-box h2{
  font-size: 22px;
}
.caption{
  font-size: 16px;
}
.card-view {
  text-align:center;
  display: block;
}
};

</style>
</template>
</dom-module>`


document.head.appendChild($_documentContainer.content);