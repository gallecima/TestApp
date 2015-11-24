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
				url: 'http://www.pixelio.com.ar/ubiquo/appFunctions/detalleOfertas.php',
				data: { id_oferta: window.localStorage.getItem("id-oferta"), lat: lat, lng: lng}
			})
			.done(function( result ) {
				
				
				var html = "";
				var images = "";
				$.each(result, function () {

					
					if(this.imagen1!=null)
					{
						$('<div class="item"><img src="'+this.imagen1+'"></div>').appendTo('.carousel-inner');
						$('<li data-target="#carousel-example-generic" data-slide-to="0"></li>').appendTo('.carousel-indicators')
					}
					if(this.imagen2!=null)
					{
						$('<div class="item"><img src="'+this.imagen2+'"></div>').appendTo('.carousel-inner');
						$('<li data-target="#carousel-example-generic" data-slide-to="1"></li>').appendTo('.carousel-indicators')
					}
					if(this.imagen3!=null)
					{
						$('<div class="item"><img src="'+this.imagen3+'"></div>').appendTo('.carousel-inner');
						$('<li data-target="#carousel-example-generic" data-slide-to="2"></li>').appendTo('.carousel-indicators')
					}
					if(this.imagen4!=null)
					{
						$('<div class="item"><img src="'+this.imagen4+'"></div>').appendTo('.carousel-inner');
						$('<li data-target="#carousel-example-generic" data-slide-to="3"></li>').appendTo('.carousel-indicators')
					}
					if(this.imagen5!=null)
					{
						$('<div class="item"><img src="'+this.imagen5+'"></div>').appendTo('.carousel-inner');
						$('<li data-target="#carousel-example-generic" data-slide-to="4"></li>').appendTo('.carousel-indicators')
					}
					
					$('.item').first().addClass('active');
					$('.carousel-indicators > li').first().addClass('active');
					$('#myCarousel').carousel();
  
					$("#nombreEmpresa").html(this.nombreEmpresa);
					$("#tituloOferta").html(this.tituloOferta);
					$("#descripcionOferta").html(this.descripcionOferta);
					
					if (this.direccionOferta!=null){ html += "<a href='#' class='list-group-item link'><i class='fa fa-home' style='margin-right:10px'></i>"+this.direccionOferta+"</a>"; }
					if (this.localidadOferta!=null){ html += "<a href='#' class='list-group-item link'><i class='fa fa-map-marker' style='margin-right:10px'></i>"+this.localidadOferta+"</a>"; }
					if (this.telefonoOferta!=null){ html += "<a href='#' class='list-group-item link'><i class='fa fa-phone' style='margin-right:10px'></i>"+this.telefonoOferta+"</a>"; }
					if (this.webOferta!=null){ html += "<a href='#' class='list-group-item link'><i class='fa fa-globe' style='margin-right:10px'></i>"+this.webOferta+"</a>"; }
					if (this.emailOferta!=null){ html += "<a href='#' class='list-group-item link'><i class='fa fa-envelope-o' style='margin-right:10px'></i>"+this.emailOferta+"</a>"; }
					
					$("#datosEmpresa").append(html);
				
				});
	

				waitingDialog.hide();
			});
	
		});			

		

			

});