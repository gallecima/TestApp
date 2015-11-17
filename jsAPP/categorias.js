var app = {
	// Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {

		console.log("yes");
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
          			html += "<a href='categorias-in.html' class='list-group-item' data-id='"+this.id+"'><h4 class='list-group-item-heading'><i class='"+this.icono+"'>"+this.nombre+"</h4></a>";
				}
			});

			$("#listaCategorias").append(html);
		});			
    }
};

app.initialize();