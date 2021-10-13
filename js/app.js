$(document).ready(function() {

	let logo 	 = document.querySelectorAll(".logo")[0];

	let BtnEle   = document.querySelector(".Btn");

	BtnEle.addEventListener("click", () => {

		$('.image').each(function(index) {

			let imgEle1 	= document.getElementsByClassName('image')[index];
			$('.canvas-app').append('<canvas class="result1-'+index+'"></canvas>');
			
			let result1Image  = document.querySelector(".result1-"+index);
			var context 	  = result1Image.getContext("2d");

			result1Image.width  = imgEle1.width;
      		result1Image.height = imgEle1.height;

	  		context.drawImage(imgEle1, 0, 00);

      		context.drawImage(logo, 50, 100);
			
	    });//end of product price

	});

});

// $(window).on("load", function () {

// 	let image = document.querySelectorAll(".image")[0];

// 	$('#app').append('<canvas class="result1-11"></canvas>');

// 	let result1Image11  = document.querySelector(".result1-11");
// 	var context11 	  = result1Image11.getContext("2d");

// 	result1Image11.width  = '500';
// 	result1Image11.height = '528';

// 	context11.drawImage(image, 0, 0);

// 	// context11.drawImage(logo, 50, 100);
    
    
// });/*end of loading*/

