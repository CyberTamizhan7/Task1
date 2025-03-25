// Collecting Data from DB

var http_request = new XMLHttpRequest();
http_request.open("GET", "fetch_data.php", true);
http_request.onreadystatechange = function(){
	if(http_request.readyState==4 && http_request.status==200){
		var data = JSON.parse(http_request.responseText);
		displayData(data);
	}	
};
http_request.send();

// Displaying The Collected Data

function displayData(data){

	for(let i=0;i<data.length;i++){
		document.getElementById("book"+(i+1)+"_name").innerText = data[i]['Book_Name'];
		document.getElementById("book"+(i+1)+"_price").innerText = "Price : $" + data[i]['Price'];
	}

	var table = document.getElementById("table_body");

	for(let i=0;i<data.length;i++){
		var row = document.createElement("tr");
		var cell1 = document.createElement("td");
		cell1.textContent = i+1;
		row.appendChild(cell1);

		var cell2 = document.createElement("td");
		cell2.textContent = data[i]['Book_Name'];
		row.appendChild(cell2);

		var cell3 = document.createElement("td");
		cell3.textContent = data[i]['Price'];
		row.appendChild(cell3);
	
		var cell4 = document.createElement("td");
		cell4.id = "td_book"+(i+1);
		cell4.textContent = 0;
		row.appendChild(cell4);

		table.appendChild(row);
	}
}



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
