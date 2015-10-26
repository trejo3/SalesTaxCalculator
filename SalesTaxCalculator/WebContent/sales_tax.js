var $ = function (id) {
    return document.getElementById(id); 
}



var calculate_click = function(subtotal, taxRate){
	var sub = parseFloat(document.getElementById("subtotal").value); 
	var tr = parseFloat(document.getElementById("taxRate").value);
	
	
	document.getElementById("subtotal").value= "";
	document.getElementById("taxRate").value= "";
	
	if (isNaN(sub)|| isNaN(tr) || sub<=0)
	{
		window.alert("This is not a number!");
	}
	
	else {
		var salesTax=(tr * sub)/100;
//		window.alert(salesTax);
		
		var total=(sub + salesTax);
//		window.alert(total);
		
		$("salesTax").value= salesTax;
		$("total").value= total.toFixed(2);
	}
	
	
}
window.onload = function () {
	 $("calculate").onclick = calculate_click;
	 $("subtotal").focus; 
	 }