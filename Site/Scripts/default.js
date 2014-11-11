$(function () {
	callerNamespace.initialize();
});

(function () {
	this.callerNamespace = this.callerNamespace || {};
	var ns = this.callerNamespace;
	var pageCount = 3;
	var currentPage = 0;
	var pageData = null;
	var currentPoint = 0;

	ns.initialize = function () {
		getPage(true);
		
		$(document).keyup(function (e) {
			switch (e.keyCode) {
			case 39:
			case 32:
				getNextPage();
				break;
			case 37:
				getPreviousPage();
				break;
			}
		});
	};
	
	function getPreviousPage() {
		getPage(false);
	}
	
	function getNextPage() {
		getPage(true);
	}

	function addPoint() {
		var $pc = $('#pageContent');
		var $mainul = null;
		if (currentPoint === 0){
			$pc.empty();
			$mainul = $('<ul class="points">');
		} else {
			$mainul = $('ul.points');
		}
		var $li = $('<li class="mainpoint">' + pageData.contents[currentPoint].main + '</li>');
		if (pageData.contents[currentPoint].subPoints.length > 0) {
			var $ul = $('<ul>');
			$.each(pageData.contents[currentPoint].subPoints, function (_, sp) {
				$ul.append('<li class="subpoint">' + sp + '</li>');
			});
			$li.append($ul);
		}
		$mainul.append($li);
		$li.fadeIn('slow');
		if (currentPoint === 0){
			$mainul.append('</ul>');
		}
		$pc.append($mainul);
	}
	
	function removePoint() {
		var $mainul = $('ul.points > li');
		$mainul.eq($mainul.length - 1).remove();
	}
	
	function retrievePage(next) {
		currentPage = next ? currentPage + 1 : currentPage - 1;
		currentPoint = 0;
		
		$.ajax({
				url : '/GetPage',
				type : 'POST',
				contentType : 'application/json; charset=utf-8',
				dataType : 'json',
				data : JSON.stringify({
					pageNumber : currentPage
				})
			}).done(function (data, textStatus, jqXHR) {
				pageData = data;
				$('h2').empty();
				$('h2').append(pageData.title);
				$('h3').empty();
				$('h3').append(pageData.description);
				$('#pageContent').empty();
			}).fail(function (jqXHR, textStatus, errorThrown) {
				console.log("Error: " + jqXHR.responseText);
			}).always(function () {
				console.log("Done!");
			});
	}
	
	function getPage(nextPoint) {
		if (nextPoint){
			if (pageData != null && currentPoint < pageData.contents.length) {
				addPoint();
				currentPoint++;
			} 
			else {
				retrievePage(nextPoint);
			}
		} 
		else {
			if (pageData != null && currentPoint > 0) {
				currentPoint--;
				removePoint();
			} 
			else {
				retrievePage(nextPoint);
			}
		}
	};
})();
