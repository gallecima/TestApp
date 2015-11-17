$(document).ready(function(e) {
    	
		waitingDialog.show('Cargando', {dialogSize: 'sm', progressType: 'info'});
		
		$.ajax({
			method: "POST",
			dataType: "json",
			jsonp: 'jsoncallback',
			crossDomain:true,
			url: 'http://www.pixelio.com.ar/ubiquo/appFunctions/listarCategorias.php'
		})
		.done(function( result ) {
			var html = "";
			$.each(result, function () {
				if(this.id>0)
				{
          			html += "<a href='#' class='list-group-item link' data-id='"+this.id+"'><h4 class='list-group-item-heading'><i class='"+this.icono+"'></i>"+this.nombre+"<i class='fa fa-caret-right pull-right'></i></h4></a>";
				}
			});

			$("#listaCategorias").append(html);
			
			$(".link").click(function(){
				window.localStorage.setItem("id-categoria", $(this).data("id"));
				document.location="categorias-in.html";
			});
			
			waitingDialog.hide();
		});	
		
			

});