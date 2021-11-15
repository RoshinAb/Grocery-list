window.onload = grocery_list;

function grocery_list() {

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {

	if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(this.responseText);
		var output = "";
		for (var i = 0; i < response.length; i++) {
			output +=
				"<tr><td>" +
				response[i].sno +
				"</td><td>" +
				response[i].name +
				"</td><td>" +
				response[i].quantity +
				"</td><td>" +
				response[i].unit +
				"</td><td>" +
				response[i].department +
				"</td><td>" +
				response[i].notes +
				"</tr>";

		}
		document.getElementById("myTable").innerHTML = output;
	}

};
xhttp.open("GET", "grocery.json", true);
xhttp.send();
}

// var input = document.getElementById("#search-input");
// var rows = document.querySelectorAll("#myTable");

// search_input.addEventListener("keyup", function (event) {
//     //console.log(event);
// 	const q = event.target.value.toLowerCase();
//     rows.forEach((row)=>{
//         console.log(row);
//         row.querySelector('td').textContent.toLowerCase().startsWith(q)? (row.style.display="table-row") : (row.style.display="none");
//     });
// });





