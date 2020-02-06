window.onload = (function() {
	document.getElementById("tekst").value = "";
	});

$(document).ready(function(){


	$("div").css("background","blue");
	$("img").css("max-width","30%"),("height","auto") ;
	$(".field").css("text-align","left");
 
	$("div").mouseover(function(){
		$("div").css("background-color","red"); 
		$("div").css("color","white"); 	
	});
	$("div").mouseout(function(){
		$("div").css("background-color","blue"); 
		$("div").css("color","white"); 	
	});

	let counter = 0;
	$("img").mouseover(function(){
		counter++
		$("span").html(counter);
	});

	$("input").keydown(function(){
		counter++
		$("span").html(counter);
	});

	$("input").keyup(function(){
	let bracket = $("input").val();
		
		$("#clone").html(bracket);
		 // wkleja znaki z ramki
	});
	
});
	

		





	
	



