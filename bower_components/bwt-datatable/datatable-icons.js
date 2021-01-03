import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="datatable" size="24">
	<svg><defs>
		<g id="sort-asc-md">
			<path d="M 11.9688 6 L 18 12 L 16.9844 13 L 12.9375 9.0156 L 12.9375 17 L 11 17 L 11.0156 9.0313 L 6.9844 13 L 6 12 L 11.9688 6 Z"></path>
		</g>
		<g id="sort-desc-md">
			<path opacity="0.8706" d="M 12.0313 18 L 6 12 L 7.0156 11 L 11.0625 14.9844 L 11.0625 7 L 13 7 L 12.9844 14.9688 L 17.0156 11 L 18 12 L 12.0313 18 Z"></path>
		</g>
		<g id="sort-desc"><path d="M7 10l5 5 5-5z"></path></g>
		<g id="sort-asc"><path d="M7 14l5-5 5 5z"></path></g>
		<g id="prev-page"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
		<g id="next-page"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
		<g id="first-page">
			<path d="M 16.1563 6.3281 L 10 12 L 16.125 17.5625 L 17.2969 16.2969 L 12.8125 12.0156 L 17.3125 7.7344 L 16.1563 6.3281 Z"></path>
			<path d="M 7 6.75 L 8.9688 6.75 L 8.9688 17.2188 L 6.9688 17.2188 L 7 6.75 Z"></path>
		</g>
		<g id="last-page">
			<path d="M 8.1178 18 L 14.0695 11.9416 L 8.148 6 L 7.0151 7.3519 L 11.3505 11.9249 L 7 16.4979 L 8.1178 18 Z"></path>
			<path d="M 16.9698 17.5494 L 15.0665 17.5494 L 15.0665 6.3672 L 17 6.3672 L 16.9698 17.5494 Z"></path>
		</g>
		<g id="editable"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
	</defs></svg>
</iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
