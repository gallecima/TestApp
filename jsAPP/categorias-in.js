$(document).ready(function(e) {

		waitingDialog.show('Cargando', {dialogSize: 'sm', progressType: 'info'});

		navigator.geolocation.getCurrentPosition(function(position) {
			var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
		
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			$.ajax({
				method: "POST",
				dataType: "json",
				jsonp: 'jsoncallback',
				crossDomain:true,
				url: 'http://www.pixelio.com.ar/ubiquo/appFunctions/listarOfertas.php',
				data: { id_categoria: window.localStorage.getItem("id-categoria"), lat: lat, lng: lng}
			})
			.done(function( result ) {
				
				
				var html = "";
				$.each(result, function () {
					
					if(this.id>0)
					{
						html +=    "<a href='#' class='list-group-item link' data-id='"+this.id+"'><h5>"+this.nombreEmpresa+"<i class='fa fa-caret-right pull-right'></i></h5><p>"+this.titulo+"<span class='pull-right'><i class='fa fa-location-arrow'></i>"+this.distancia+" km</span></p></a>";
					}
				});
	
				$("#listaOfertas").append(html);
				
				$(".link").click(function(){
					window.localStorage.setItem("id-oferta", $(this).data("id"));
					document.location="ofertas.html";
				});
				
				waitingDialog.hide();
			});
	
		});			

		

			

});