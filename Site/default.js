/// <reference path="jquery-2.0.3.min.js" />


$(function () {
	callerNamespace.initialize();
});

(function () {
	this.callerNamespace = this.callerNamespace || {};
	var ns = this.callerNamespace;
	var pageCount = 3;
	var currentPage = 1;
	var $prevPage, $nextPage;

	ns.initialize = function () {

		$prevPage = $('#prevPage');
		$nextPage = $('#nextPage');
	
		getPage(currentPage);
		
		//$('#prevPage').prop("disabled", true);
		prevPage.prop("disabled", true);

		//$('#nextPage').click(function () {
		$nextPage.click(function () {
			// currentPage += 1;
			// //$(this).prop("disabled", pageCount === currentPage);
			// //$('#prevPage').prop("disabled", false);
			// getPage(currentPage);
		});
		//$('#prevPage').click(function () {
		$prevPage.click(function () {
			getPreviousPage();
			// currentPage -= 1;
			// $(this).prop("disabled", currentPage === 1);
			// $('#nextPage').prop("disabled", false);
			// getPage(currentPage);
		});
		$(document).keyup(function (e) {
			switch (e.keyCode) {
			case 39:
			case 32:
				//alert("Hit Right or SpaceBar!");
				getNextPage();
				break;
			case 37:
				//alert("Hit Left!");
				getPreviousPage();
				break;
			}
		});
	};
	
	function getPreviousPage() {
		currentPage -= 1;
		//$('#prevPage').prop("disabled", currentPage === 1);
		$prevPage.prop("disabled", currentPage === 1);
		//$('#nextPage').prop("disabled", false);
		$nextPage.prop("disabled", false);
		getPage(currentPage);
	}
	
	function getNextPage() {
		currentPage += 1;
		//$(this).prop("disabled", pageCount === currentPage);
		$nextPage.prop("disabled", pageCount === currentPage);
		//$('#prevPage').prop("disabled", false);
		$prevPage.prop("disabled", false);
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
			$('h2').append(data.content.title);
			var $pc = $('#pageContent');
			$pc.empty();
			var $mainUl = $('<ul class="points">');
			$.each(current.contents, function (_, mp) {
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
