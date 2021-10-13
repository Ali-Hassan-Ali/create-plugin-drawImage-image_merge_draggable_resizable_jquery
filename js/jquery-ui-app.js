  $(function() {

   	 // $( "#resizable" ).resizable({
   	 // 	containment: "#resizable",
     //    handles: 'n,s,w,e'
     // });

 	// $( "#test" ).resizable({
  //       handles: 'n,s,w,e',
  //  	 	containment: "#resizable"
  //    });

   	 $( "#resizable" ).draggable({
        containment: "#app"
     });
   	 // $('#test').resizable({
   	 // 	containment: "#app"
   	 // });
   	  $("img").resizable({ handles: "all", ghost: true, autoHide: true,containment: "#app" }).parent().draggable({containment: "#app"});

 //     $('#test').resizable({
	// 	start: function(event, ui) {
		
	// 		console.log($('#test').width() + ' ' + $('#test').height());
		
	// 	},
	// 	stop: function(event, ui) {
		
	// 		console.log($('#test').width() + ' ' + $('#test').height());
		
	// 	}	
	// });

  });