import '../@polymer/polymer/polymer-legacy.js';
import '../@polymer/font-roboto/roboto.js';
import '../@polymer/iron-flex-layout/iron-flex-layout-classes.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="paper-datatable-styles">
	<template>
		<custom-style>
			<style is="custom-style" include="iron-flex iron-flex-alignment iron-positioning"></style>
			<style is="custom-style">
				table{
					width: 100%;
					border-spacing: 0px;
					border-collapse: seperate;
				}
				table.card{
					background: white;
					@apply --shadow-elevation-2dp;
					border-radius: 2px;
				}
				th {
					font-size: 12px;
					color: rgba(0,0,0,.54);
					@apply --paper-font-common-base;
					@apply --paper-font-common-nowrap;
					font-weight: 500;
					text-align: left;
					height: 56px;
					padding-left: 26px;
					padding-right: 26px;
				}
				tr {
					height: 48px;
				}
				td {
					font-size: 13px;
					font-weight: normal;
					color: rgba(0,0,0,.87);
					padding-left: 26px;
					padding-right: 26px;
					border-top: 1px solid var(--paper-datatable-divider-color, var(--divider-color));
				}
				tr:hover td{
					background: #EEEEEE;
				}
			</style>
		</custom-style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
