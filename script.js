function minus(id){
	let value = parseInt(document.getElementById(id).innerText);
	if(value>0){
		document.getElementById(id).innerText = parseInt(document.getElementById(id).innerText) - 1;
	}
}
function plus(id){
	let value = parseInt(document.getElementById(id).innerText);
	if(value<100){
		document.getElementById(id).innerText = parseInt(document.getElementById(id).innerText) + 1;
	}
}

function addToCart(){
	let book1_quantity = parseInt(document.getElementById("book1_quantity").innerText);
	let book2_quantity = parseInt(document.getElementById("book2_quantity").innerText);
	let book3_quantity = parseInt(document.getElementById("book3_quantity").innerText);
	let book1_price = parseInt(document.getElementById("book1_price").innerText.slice(9));
	let book2_price = parseInt(document.getElementById("book2_price").innerText.slice(9))
	let book3_price = parseInt(document.getElementById("book3_price").innerText.slice(9))
	let book1_cost = book1_quantity * book1_price;
	let book2_cost = book2_quantity * book2_price;
	let book3_cost = book3_quantity * book3_price;
	let total = book1_cost + book2_cost + book3_cost;
	document.getElementById("td_book1").innerText = book1_quantity;
	document.getElementById("td_book2").innerText = book2_quantity;
	document.getElementById("td_book3").innerText = book3_quantity;
	document.getElementById("total_value").innerText = `\$${total}`;
}