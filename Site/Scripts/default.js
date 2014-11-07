$(function () {
	callerNamespace.initialize();
});

(function () {
	this.callerNamespace = this.callerNamespace || {};
	var ns = this.callerNamespace;
	var pageCount = 3;
	var currentPage = 1;

	ns.initialize = function () {
		getPage(currentPage);
		
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
		currentPage -= 1;
		getPage(currentPage);
	}
	
	function getNextPage() {
		currentPage += 1;
		getPage(currentPage);
	}

	function getPage(pageNumber) {
		$.ajax({
			url : '/GetPage',
			type : 'POST',
			contentType : 'application/json; charset=utf-8',
			dataType : 'json',
			data : JSON.stringify({
				pageNumber : pageNumber
			})
		}).done(function (data, textStatus, jqXHR) {
			$('h2').empty();
			$('h2').append(data.title);
			$('h3').empty();
			$('h3').append(data.description);
			var $pc = $('#pageContent');
			$pc.empty();
			var $mainUl = $('<ul class="points">');
			$.each(data.contents, function (_, mp) {
				var $li = $('<li class="mainPoint">' + mp.main + '</li>');
				if (mp.subPoints.length) {
					var $ul = $('<ul>');
					$.each(mp.subPoints, function (_, sp) {
						$ul.append('<li class="subPoint">' + sp + '</li>');
					});
					$li.append($ul);
				}
				$mainUl.append($li);
			});
			$mainUl.append('</ul>');
			$pc.append($mainUl);

		}).fail(function (jqXHR, textStatus, errorThrown) {
			console.log("Error: " + jqXHR.responseText);
		}).always(function () {
			console.log("Done!");
		});
	};
})();
