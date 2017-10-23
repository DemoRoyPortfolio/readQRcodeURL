$(function(){
	'use strict';

	window.analyticCode = {
		getUrl : function(type, ele, fn) {
			var src = null;

			if(type == 'file-url' && ele.files.length > 0) {
				src = getObjectURL(ele.files[0]);
			};

			qrcode.decode(src);
			qrcode.callback = function(imgMsg) {
				fn(imgMsg, src);
			};
		}
	};

	function getObjectURL(file) {
		var url = null;

		if(window.createObjectURL != undefined) {
			url = window.createObjectURL(file);
		} else if(window.URL != undefined) {
			url = window.URL.createObjectURL(file);
		} else if(window.webkitURL != undefined) {
			url = window.webkitURL.createObjectURL(file);
		};

		return url;
	};

})
